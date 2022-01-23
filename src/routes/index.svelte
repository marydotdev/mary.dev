<script context="module">
  export const prerender = true

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch('/posts.json?limit=2').then((res) => res.json())
      }
    }
  }
</script>

<script>
  import PostCard from '$lib/components/PostCard.svelte'
  import Hero from '$lib/components/Hero.svelte';
  import { name } from '$lib/info.js'

  export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>


<div class="max-w-2xl mx-auto">
  <Hero />
  <img src="/maryandlaptop.png" alt="marydotdev" />
  <!-- recent posts -->
    <h2 class="pt-12 font-display font-medium tracking-tight text-2xl md:text-3xl flex items-baseline gap-4 !mb-2">
      Recent Posts
    </h2>
    <div class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
    <div class="grid gap-4 grid-cols-1">
      {#each recentPosts as post}
          <PostCard {post} />
      {/each}
    </div>
  </div>

  <div class="text-right pt-8 text-lg md:text-xl">
    <a href="/posts" class="opacity-60 hover:opacity-100">View All &rarr;</a>
  </div>
</div>
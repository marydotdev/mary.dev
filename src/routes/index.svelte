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
  // import PostCard from '$lib/components/PostCard.svelte'
  import Matter from '$lib/components/Matter.svelte'
  import { name } from '$lib/info.js'

  // export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>


<div class="max-w-4xl mx-auto">
  <Matter />

  <!-- recent posts -->
    <!-- <h2 class="pt-12 font-display font-medium tracking-tight text-2xl md:text-3xl flex items-baseline gap-4 !mb-2">
      Recent Posts
      <a href="/posts" class="opacity-60">View All</a>
    </h2>
    <div class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {#each recentPosts as post}
          <PostCard {post} small />
      {/each}
    </div>
  </div> -->
</div>
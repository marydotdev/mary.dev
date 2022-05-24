<script context="module">
  export const prerender = true
  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch('/posts.json?limit=2').then((res) => res.json()),
      }
    }
  }
</script>

<script>
  import Hero from '$lib/components/Hero.svelte';
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/info.js'

  export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="h-full">
  <Hero />

  <section id="blog" class="max-w-6xl mx-auto pt-8 px-4 xl:px-0">
    <a class="hover:underline" href="/blog">
      <h3 class="py-4 text-3xl sm:text-4xl md:text-5xl leading-10 font-medium tracking-tighter">From my ✨blog✨</h3>
    </a>
    
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {#each recentPosts as post}
        <PostPreview {post} />
      {/each}
    </div>
  </section>
</div>

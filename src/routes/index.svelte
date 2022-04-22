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
  import Subscribe from '$lib/components/Subscribe.svelte';
  import DesignDevelopDeploy from '$lib/components/DesignDevelopDeploy.svelte';
  import { name } from '$lib/info.js'

  export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="h-full">
  <Hero />

  <section id="newsletter" class="w-full h-full px-4 py-12 sm:py-24 md:py-36">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col items-center md:flex-row md:justify-around gap-8">  
        <div class="flex flex-col gap-8 max-w-xl">
          <h3 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
            <a class="font-bold underline sm:no-underline sm:hover:underline" href="/newsletter" target="_blank">Design, Develop, Deploy 🚀</a> is a biweekly newsletter about web design and development. Each issue features an original project designed, developed, and deployed by me!
          </h3>

          <Subscribe />
        </div>

        <div class="relative w-96">         
          <DesignDevelopDeploy />
        </div>
    </div>  
  </section>


  <section>
    <div class="max-w-6xl mx-auto flex flex-col gap-12 px-4 pb-24">
      <div class="md:px-4">
        <div class="py-8">
          <a class="hover:underline" href="/blog">
          <h4 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">From my ✨blog✨</h4>
          </a>
        </div>

        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {#each recentPosts as post}
            <div>
              <PostPreview {post} />
            </div>
          {/each}
        </div>
      </div>
  </section>
</div>

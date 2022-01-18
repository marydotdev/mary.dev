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
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import PostCard from '$lib/components/PostCard.svelte'
  import Matter from '$lib/components/Matter.svelte'
  import { name } from '$lib/info.js'

  export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>


<div class="max-w-4xl mx-auto">
  <Matter />

  <div class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert">
    <!-- recent posts -->
    <h2 class="flex items-baseline gap-4 !mb-2">
      Recent Posts
      <ButtonLink href="/posts" size="small" raised={false} class="opacity-60">View All</ButtonLink>
    </h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {#each recentPosts as post}
          <PostCard {post} small />
      {/each}
    </div>
  </div>
</div>
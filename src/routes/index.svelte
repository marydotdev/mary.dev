<script context="module">
  import { gql, GraphQLClient } from 'graphql-request'

  export async function load() {
    const graphcms = new GraphQLClient(
      import.meta.env.VITE_GRAPHCMS_URL,
      {
        headers: {},
      }
    )

    const query = gql`
      query PostsIndex {
        posts {
          id
          title
          slug
          date
          description
        }
      }
    `

    const { posts } = await graphcms.request(query)

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import PostPreview from '$lib/components/PostPreview.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Matter from '$lib/components/Matter.svelte';
  import { name } from '$lib/info.js'

  export let posts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>


<div class="max-w-2xl mx-auto">
  <Hero />
  <img src="/computermary.png" alt="marydotdev" class="w-96 h-auto mx-auto md:w-max" />
  <!-- recent posts -->
    <div class="flex items-baseline gap-4 pt-12 pb-8 font-display tracking-tight">
      <h2 class="font-medium text-2xl md:text-3xl">
        Recent Posts
      </h2>
      <a href="/posts" class="text-lg md:text-xl opacity-60 hover:opacity-100">View All &rarr;</a>
    </div>
    
    <div class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
    <div class="grid gap-4 grid-cols-1">
      {#each posts as post}
          <PostPreview {post} />
      {/each}
    </div>
  </div>

  <div class="flex items-baseline gap-4 pt-12 pb-8 font-display tracking-tight">
    <h2 class="font-medium text-2xl md:text-3xl">
      Use Wrecking Ball
    </h2>
    <a href="/projects" class="text-lg md:text-xl opacity-60 hover:opacity-100">Projects &rarr;</a>
  </div>

  <Matter />
</div>
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
    import { name } from '$lib/info.js'
    import PostPreview from '$lib/components/PostPreview.svelte';
    
    export let posts

    let search;
    $: items = posts.filter((item) => {
    if (search) {
      return item.title.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>

<div class="max-w-4xl mx-auto flex flex-col flex-grow">
    <h1 class="text-3xl sm:text-5xl font-display font-regular tracking-tight pb-4 sm:pb-8">Blog Posts</h1>
        <p class="font-display text-xl text-dark/90 dark:text-light/90">
            I write about web development, UI design, and other interesting things I stumble across while surfing the world wide web. Use the search bar below to filter posts by title.
        </p>
  
        <div class="relative w-full sm:w-2/3 my-8 sm:my-12 mx-auto">
            <input
                bind:value={search}
                aria-label="Search articles"
                type="text"
                placeholder="Search articles"
                class="block w-full px-4 py-2 text-zinc-800 bg-white border border-zinc-200 rounded-md dark:border-zinc-800 focus:ring-blue-500  dark:bg-zinc-700 dark:text-zinc-100"
            />
            <svg class="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
        </div>

        <div class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
            {#if !search}
            <div class="flex-grow divide-y divide-zinc-300 dark:divide-zinc-700">
              {#each posts as post}
                <div class="py-8 first:pt-0">
                  <PostPreview {post} />
                </div>
              {/each}
            </div>
          {/if}
          
          {#if search}
        <div class="flex-grow divide-y divide-zinc-300 dark:divide-zinc-700">
          {#each items as item}
            <div class="py-8 first:pt-0">
              <PostPreview post={item} />
            </div>
          {/each}
        </div>
      {/if} 
      </div>
    

</div>
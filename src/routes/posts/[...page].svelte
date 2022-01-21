<script context="module">
  export const prerender = true

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export const load = async ({ fetch, params }) => {
    let page = 1
    let limit = 10

    if (params.page) {
      try {
        // a url of /posts/page/2 will come through as 'page/2' for params.page
        page = parseInt(params.page.split('page/').pop())
      } catch (e) {
        console.error(e)
      }
    }

    const fetchPostsParams = new URLSearchParams()

    fetchPostsParams.set('page', page)
    fetchPostsParams.set('limit', limit)

    const posts = await fetch(`/posts.json?${fetchPostsParams.toString()}`).then((res) =>
      res.json()
    )

    // if page doesn't exist, direct to page 1
    if (posts.length == 0 && page > 1) {
      return {
        redirect: `/posts`,
        status: 302
      }
    }

    return {
      props: {
        posts,
        page,
        limit
      }
    }
  }
</script>

<script>
  import PostPreview from '$lib/components/PostPreview.svelte'
  import ItemPreview from '$lib/components/ItemPreview.svelte'
  import { name } from '$lib/info.js'

  export let posts
  export let page
  export let items

  $: isFirstPage = page === 1
  $: hasNextPage = posts[posts.length - 1]?.previous

  let search
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
  <h1 class="text-3xl sm:text-5xl font-display font-regular tracking-tight pb-4">Blog Posts</h1>
      <p class="font-display text-xl text-dark/90 dark:text-light/90 pb-4">
          I write about web development, UI design, and other interesting things I stumble across while surfing the world wide web. Use the search bar below to filter posts by title.
      </p>

      <div class="relative w-full sm:w-2/3  mb-8 mx-auto">
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
              <ItemPreview {item} />
            </div>
          {/each}
        </div>
      {/if} 
        <!-- pagination -->
        <div class="flex visible items-center justify-between pt-8 opacity-70">
          {#if !isFirstPage}
            <a href={`/posts/page/${page - 1}`}>
              Previous
            </a>
          {:else}
            <div />
          {/if}
      
          {#if hasNextPage}
            <a href={`/posts/page/${page + 1}`}>Next</a>
          {/if}
        </div>
        </div>
</div>

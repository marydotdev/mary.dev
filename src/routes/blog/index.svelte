<script context="module">
  export const prerender = true

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export const load = async ({ params, fetch }) => {
    let page = 1
    let limit 

    if (page.params) {
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
        redirect: `/blog`,
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
  import { name } from '$lib/info.js'

  export let posts
  export let page

  let inputEl;

	function focusSearch(e) {
		if (e.key === '/' && inputEl) inputEl.select();
	}

  let searchTerm = "";

  $: searchTerm

  $: searchedPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm);
  })

  $: isFirstPage = page === 1
  $: hasNextPage = posts[posts.length - 1]?.previous


</script>

<svelte:head>
  <title>{name} | Blog</title>
</svelte:head>

<svelte:window on:keyup={focusSearch} />

<div class="w-full max-w-6xl mx-auto flex flex-col justify-center px-2">
  <div class="w-full flex flex-col items-center py-8 gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
    <h1 class="text-5xl font-bold">Blog</h1>

    <div class="relative w-72 mx-auto sm:w-96 sm:mx-0">
      <input
      aria-label="Search posts"
      type="text" 
      placeholder="Press / to search" 
      bind:value={searchTerm}
      bind:this={inputEl}
          class="block w-full px-4 py-2 text-dark bg-dark/10 border border-zinc-200 rounded-md dark:border-zinc-800 focus:ring-blue-500  dark:bg-light/10 dark:text-zinc-100"
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
  </div>
  
  <div class="w-full flex flex-col items-center pb-8 md:flex-row md:justify-start md:items-center">
    <p class="text-2xl">I write about UI/UX design, front end development, and whatever else I find interesting!</p>
  </div>
  

      <!-- <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"> -->
        {#if searchedPosts.length}
        <div class="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each searchedPosts as post}      
              <PostPreview {post} />
            {/each}
        </div>
        {:else}
            <div class="flex flex-col gap-2 items-center">
              <p>No results found for '{searchTerm}'.</p>
              <button class="rounded-lg p-2 bg-dark/10 text-dark dark:bg-light/10 dark:text-light" on:click={() => (searchTerm = '')}>Clear your search</button>
            </div>
          {/if}

  <!-- pagination -->
  <div class="flex visible items-center justify-between p-4 sm:p-8 text-xl font-medium">
    {#if !isFirstPage}
      <a href={`/blog/page/${page - 1}`}>
        &larr; Previous
      </a>
    {:else}
      <div />
    {/if}
    {#if hasNextPage}
      <a href={`/blog/page/${page + 1}`}>Next &rarr;</a>
    {/if}
  </div>

</div>
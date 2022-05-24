<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://api.github.com/users/marydotdev/repos`);
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      return {
        props: { projects: data }
      }
    }
  }
</script>

<script>
  import ProjectPreview from "$lib/components/ProjectPreview.svelte";

  export let projects

  let inputEl;
  
      function focusSearch(e) {
          if (e.key === '/' && inputEl) inputEl.select();
      }
  
    let searchTerm = "";
  
    $: searchTerm
  
    $: searchedProjects = projects.filter((project) => {
      return project.name.toLowerCase().includes(searchTerm);
    })
</script>

<svelte:window on:keyup={focusSearch} />

<div class="w-full max-w-6xl mx-auto flex flex-col justify-center px-2">
  <div class="w-full flex flex-col items-center py-8 gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
    <h1 class="text-5xl font-bold">Projects</h1>

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
  
  <!-- <div class="w-full flex flex-col items-center pb-8 md:flex-row md:justify-start md:items-center">
    <p class="text-2xl">Check out some of my projects and read more about their development.</p>
  </div> -->

  {#if searchedProjects.length}
        <ul class="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each searchedProjects as project}      
            <li>
              <ProjectPreview {project} />
            </li>
            {/each}
        </ul>
        {:else}
            <div class="flex flex-col gap-2 items-center">
              <p>No results found for '{searchTerm}'.</p>
              <button class="rounded-lg p-2 bg-dark/10 text-dark dark:bg-light/10 dark:text-light" on:click={() => (searchTerm = '')}>Clear your search</button>
            </div>
          {/if}
</div>

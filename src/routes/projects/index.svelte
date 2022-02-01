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
        query ProjectsIndex {
          projects {
            id
            title
            slug
            description
            coverImage {
                fileName
                url
            }
          }
        }
      `
  
      const { projects } = await graphcms.request(query)
  
      return {
        props: {
          projects,
        },
      }
    }
  </script>

<script>
    import { name } from '$lib/info.js'
    export let projects
</script>

<svelte:head>
  <title>{name} | Projects</title>
</svelte:head>

<div class="max-w-4xl mx-auto font-display">
    <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4 sm:pb-8">Projects & Experiments</h1>

    <div class="flex flex-col gap-4">
        <p class="text-2xl sm:text-3xl">A collection of past work, current projects, and future plans.</p>
    </div> 
    <section class="py-8">
        <div>   
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
        <li>
            <a href="/projects/{project.slug}">
            <div class="flex flex-col items-center justify-center gap-4">
                <img src="{project.coverImage.url}" alt="{project.coverImage.fileName}" class="rounded-xl" />
                <h2 class="text-2xl">{project.title}</h2>
            </div>
            </a>
        </li>
        {/each}
        </ul>
        </div>
    </section>
</div>
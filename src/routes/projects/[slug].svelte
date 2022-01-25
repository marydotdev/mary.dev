<script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
  
    export async function load(context) {
      const graphcms = new GraphQLClient(
        import.meta.env.VITE_GRAPHCMS_URL,
        {
          headers: {},
        }
      )
  
      const query = gql`
        query ProjectPageQuery($slug: String!) {
          project(where: { slug: $slug }) {
            title
            slug
            description
            text {
              html
            }
            coverImage {
              fileName
              url
            }
            tags
            source
            link
          }
        }
      `
  
      const variables = {
        slug: context.params.slug,
      }
  
      const { project } = await graphcms.request(query, variables)
  
      return {
        props: {
          project,
        },
      }
    }
  </script>
  
  
<script>
  import { name, website } from '$lib/info'
  
  export let project;

  let tags = project.tags;
</script>

<svelte:head>
  <title>{name} | {project.title}</title>
</svelte:head>
  
<div class="max-w-4xl mx-auto font-display">

  <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4 sm:pb-8">{project.title}</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <img src="{project.coverImage.url}" alt="{project.coverImage.fileName}" class="" />
    <div class="flex flex-col justify-around sm:pl-8">
      <div class="py-4">
        <h2 class="text-2xl sm:text-4xl font-regular tracking-tight pb-4">The Stack</h2>
        <ul class="flex flex-col">
          {#each tags as tag}
          <li class="text-xl">{tag}</li>
          {/each}
        </ul>
      </div>
      <div class="py-4">
        <h2 class="text-2xl sm:text-4xl font-regular tracking-tight pb-4">The Project</h2>
        <p class="text-xl">{@html project.text.html}</p>
      </div>
      <div class="flex flex-col gap-2 py-4">
        <a href="{project.link}" target="_blank" class="text-2xl sm:text-3xl font-regular tracking-tight">Visit Site</a>
        <a href="{project.source}" target="_blank" class="text-2xl sm:text-3xl font-regular tracking-tight">View Source</a>
      </div>
    </div>
  </div>

    

  <div class="pt-12 flex justify-end">
    <a href={`/projects`} class="text-xl sm:text-2xl hover:font-medium transition duration-500">
      Back to Projects &rarr;
    </a>
  </div>
</div>
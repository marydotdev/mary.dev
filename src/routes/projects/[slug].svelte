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
  
  export let project
</script>

<svelte:head>
  <title>{name} | {project.title}</title>
</svelte:head>
  
<div class="max-w-4xl mx-auto">

  <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4 sm:pb-8">{project.title}</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2">
  <img src="{project.coverImage.url}" alt="{project.coverImage.fileName}" class="" />
  <div>
    <p>{project.description}</p>
  </div>
  </div>
  <article class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
    {@html project.text.html}
  </article>

  <div class="pt-12 flex justify-end">
    <a href={`/projects`} class="text-xl sm:text-2xl hover:font-medium transition duration-500">
      Back to Projects
    </a>
  </div>
</div>
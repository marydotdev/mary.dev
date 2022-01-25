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
      query PostPageQuery($slug: String!) {
        post(where: { slug: $slug }) {
          title
          slug
          date
          text {
            html
          }
        }
      }
    `

    const variables = {
      slug: context.params.slug,
    }

    const { post } = await graphcms.request(query, variables)

    return {
      props: {
        post,
      },
    }
  }
</script>


<script>
  import { name, website } from '$lib/info';
  import { format } from 'date-fns';

  export let post
</script>

<svelte:head>
  <title>{name} | {post.title}</title>
</svelte:head>

<div class="max-w-2xl mx-auto">
  <div class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
    <article class="relative max-w-2xl mx-auto">
      <h1>
        <a href={post.slug}>
        {post.title}
        </a>
      </h1>
      <div class="opacity-70">
        <time datetime={new Date(post.date).toISOString()}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
      </div>
      <div>{@html post.text.html}</div>
    </article>
  </div>

  <div class="flex justify-end">
    <a href={`/posts`} class="text-xl sm:text-2xl hover:font-medium transition duration-500">
      Back to Posts &rarr;
    </a>
  </div>
  
</div>
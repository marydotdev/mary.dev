<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, fetch }) {
    const { slug } = params

    // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
    const posts = await fetch('/posts.json').then((res) => res.json())
    const post = posts.find((post) => slug === post.slug)

    if (!post) {
      return {
        status: 404,
        error: 'Post not found'
      }
    }

    const component = post.isIndexFile
      ? // vite requires relative paths and explicit file extensions for dynamic imports
        await import(`../../../posts/${post.slug}/index.md`)
      : await import(`../../../posts/${post.slug}.md`)

    return {
      props: {
        ...post,
        component: component.default
      }
    }
  }
</script>

<script>
  import { format } from 'date-fns'
  import { page } from '$app/stores'
  import { name, website } from '$lib/info'
  import PostCard from '$lib/components/PostCard.svelte';
  import ToC from '$lib/components/ToC.svelte';

  export let component

  // metadata
  export let title
  export let date
  export let preview
  export let readingTime
  export let slug
  export let next
  export let previous

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/${slug}`
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={preview.text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={preview.text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="max-w-2xl mx-auto">
<div class="prose prose-zinc prose-md sm:prose sm:prose-zinc sm:prose-lg sm:max-w-none dark:prose-invert">
<article class="relative max-w-2xl mx-auto">
  <h1 class="!mt-0 !mb-2">
    <a class="!font-medium" href={$page.url.pathname}>
      {title}
    </a>
  </h1>
  <div class="opacity-70">
    <time datetime={new Date(date).toISOString()}>{format(new Date(date), 'MMMM d, yyyy')}</time>
    •
    <span>{readingTime}</span>
  </div>

  <div class="relative">
    <!-- render the post -->
    <svelte:component this={component} />

    <div class="hidden xl:block absolute not-prose left-[100%]" aria-label="Table of Contents">
      <div class="fixed z-10 px-4 py-2 ml-8 top-[4.5rem]">
  
        <ToC allowedHeadings={['h2', 'h3', 'h4', 'h5', 'h6']} />
      </div>
    </div>
 
  </div>
</article>

<div class="pt-12 flex justify-end">
  <a href={`/posts`} class="!no-underline sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
    Back to Posts
  </a>
</div>

<!-- next/previous posts -->
{#if previous || next}
  <hr />
  <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
    {#if previous}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label !mb-4">Previous Post</h6>
        <div class="flex-1 post-preview">
          <PostCard post={previous} small />
        </div>
      </div>
    {:else}
      <div />
    {/if}
    {#if next}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label flex justify-end !mb-4">Next Post</h6>
        <div class="flex-1 post-preview">
          <PostCard post={next} small />
        </div>
      </div>
    {/if}
  </div>
{/if}
</div>
</div>


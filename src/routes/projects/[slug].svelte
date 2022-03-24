<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, fetch }) {
    const { slug } = params

    // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
    const projects = await fetch('/projects.json').then((res) => res.json())
    const project = projects.find((project) => slug === project.slug)

    if (!project) {
      return {
        status: 404,
        error: 'Project not found'
      }
    }

    const component = project.isIndexFile
      ? // vite requires relative paths and explicit file extensions for dynamic imports
        await import(`../../../projects/${project.slug}/index.md`)
      : await import(`../../../projects/${project.slug}.md`)

    return {
      props: {
        ...project,
        component: component.default
      }
    }
  }
</script>

<script>
  import { format, parseISO } from 'date-fns'
  import { page } from '$app/stores'
  import { name, website } from '$lib/info'
  import ProjectPreview from '$lib/components/ProjectPreview.svelte'

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
<div class="px-2">
  <article class="mx-auto relative prose dark:prose-invert">
    <h1 class="!mt-0 !mb-2">
      <a class="!font-medium" href={$page.url.pathname}>
        {title}
      </a>
    </h1>
    <div class="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center">
      <div class="flex items-center gap-3">
        <img src="/img/mary/professionalmary.jpeg" alt="Mary Haedrich" class="flex-none w-8 h-8 my-0 rounded-full" />
        <span class="opacity-70">Mary Haedrich</span>
      </div>
      <div class="opacity-70">
          <time datetime={new Date(parseISO(date)).toISOString()}>{format(new Date(parseISO(date)), 'MMMM d, yyyy')}</time>
          •
          <span>{readingTime}</span>
      </div>
    </div>

    <div class="relative">
      <!-- render the post -->
      <svelte:component this={component} />
    </div>

    <hr />
  </article>

  <div class="max-w-2xl mx-auto">
  <!-- next/previous projects -->
  {#if previous || next}
    <div class="pt-12 grid gap-8 grid-cols-1 sm:grid-cols-2">
      {#if previous}
        <div class="flex flex-col">
          <h6 class="pb-4 text-lg">&larr; Previous Project</h6>
          <div class="project-preview">
            <ProjectPreview project={previous} />
          </div>
        </div>
      {:else}
      <div />
      {/if}
      {#if next}
        <div class="flex flex-col">
          <h6 class="flex justify-end pb-4 text-lg">Next Project &rarr;</h6>
          <div class="project-preview">
            <ProjectPreview project={next} />
          </div>
        </div>
      {/if}
    </div>
  {/if}
  </div>
</div>
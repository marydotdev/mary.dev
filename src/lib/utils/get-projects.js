import { browser } from '$app/env'
import { format } from 'date-fns'
import { parse } from 'node-html-parser'
import readingTime from 'reading-time/lib/reading-time.js'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`get-posts.js should not be used on the browser, fetch from /posts.json instead`)
}

/**
 * Gets all of the posts with added metadata .
 *
 * This should only be used on the server, as some of the metadata we add requires
 * being on node (see `posts` below).
 *
 * For getting posts from the client, fetch from the /posts.json endpoint instead
 */
export function getProjects({ page = 1, limit } = {}) {
  if (limit) {
    return projects.slice((page - 1) * limit, page * limit)
  }

  return projects
}
const projects = Object.entries(import.meta.globEager('/projects/**/*.md'))
  .map(([filepath, project]) => {
    return {
      metadata: project.metadata,

      published: project.metadata.published,

      title: project.metadata.title,

      component: project.default,

      date: project.metadata.date ? format(new Date(project.metadata.date), 'yyyy-MM-dd') : undefined,

      customPreview: project.metadata.preview,

      slug: filepath.replace(/(\/index)?\.md/, '').split('/').pop(),

      // whether or not this file is `my-post.md` or `my-post/index.md`
      // (needed to do correct dynamic import in posts/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),
    }
  })

  // filter out drafts
  .filter((project) => project.published).slice()

  // parse HTML output for content metadata (preview, reading time, toc)
  .map((project) => {
    const parsedHtml = parse(project.component.render().html)

    // Use the custom preview in the metadata, if availabe, or the first paragraph of the post for the preview
    const preview = parsedHtml.firstChild
    
    return {
      ...project,
      preview: {
        html: preview.toString(),
        text: preview.structuredText
      }, 

      // get estimated reading time for the post
      readingTime: readingTime(parsedHtml.structuredText).text
    }
  })

  

  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous post
  .map((project, index, allProjects) => ({
    ...project,
    next: allProjects[index - 1],
    previous: allProjects[index + 1]
  }))
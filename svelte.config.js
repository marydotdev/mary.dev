import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    [
      preprocess({
        postcss: true
      })
    ]
  ],

  kit: {
    target: '#svelte',
    adapter: vercel(),

    // if you are not using the static adapter and
    // you don't want prerendering, remove this section
    prerender: {
      entries: ['*', '/sitemap.xml', '/rss.xml']
    },

  }
}

export default config
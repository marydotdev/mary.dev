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
    adapter: vercel()
  }
}

export default config
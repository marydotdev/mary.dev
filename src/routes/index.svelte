<script context="module">
  export const prerender = true
  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch('/posts.json?limit=2').then((res) => res.json()),
      }
    }
  }
</script>

<script>
  import Hero from '$lib/components/Hero.svelte';
  import PostPreview from '$lib/components/PostPreview.svelte'
  import Subscribe from '$lib/components/Subscribe.svelte';
  import Swiper from '$lib/components/Swiper.svelte';
  import Matter from '$lib/components/Matter.svelte';
  import { name } from '$lib/info.js'

  export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="h-full">

  <Hero />

  <section id="profile" class="w-full h-full bg-gradient-to-b from-pink-300/50 via-red-200/10 to-rose-200 dark:from-pink-300/0 dark:to-rose-300/0 px-4">
    <div class="max-w-6xl mx-auto py-12">
      <div class="flex flex-col items-center md:flex-row gap-8">  
          <div class="">
              <div class="w-96">
                <Swiper />
              </div>
          </div>

          <div class="max-w-2xl mx-auto flex flex-col gap-4 items-end">
            <h2 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
                <span>I'm an interdisciplinary designer and full stack developer interested in everything.</span>
            </h2>

            <h2 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
              <span>My dream job is 'eccentric billionaire' but currently I work at <a href="https://Sticker.com" target="_blank" class="underline sm:no-underline sm:hover:underline">Sticker.com</a> and <a href="/work" class="underline sm:no-underline sm:hover:underline">freelance</a> on the side.</span>
            </h2>

            <h2 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
              <span>Let's <a href="/work" class="underline sm:no-underline sm:hover:underline">work</a> together. <a href="mailto:mary.haedrich@gmail.com" class="underline sm:no-underline sm:hover:underline">Get in touch</a>.</span>
          </h2>   
        </div>
      </div>
  </div>
  </section>

  <div class="bg-cyan-300/50 text-rose-200 dark:invisible">
    <svg class="w-full"  viewBox="0 0 900 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 124L21.5 121.8C43 119.7 86 115.3 128.8 107.5C171.7 99.7 214.3 88.3 257.2 101.3C300 114.3 343 151.7 385.8 167C428.7 182.3 471.3 175.7 514.2 162.2C557 148.7 600 128.3 642.8 119.3C685.7 110.3 728.3 112.7 771.2 122.8C814 133 857 151 878.5 160L900 169V3.05176e-05H878.5C857 3.05176e-05 814 3.05176e-05 771.2 3.05176e-05C728.3 3.05176e-05 685.7 3.05176e-05 642.8 3.05176e-05C600 3.05176e-05 557 3.05176e-05 514.2 3.05176e-05C471.3 3.05176e-05 428.7 3.05176e-05 385.8 3.05176e-05C343 3.05176e-05 300 3.05176e-05 257.2 3.05176e-05C214.3 3.05176e-05 171.7 3.05176e-05 128.8 3.05176e-05C86 3.05176e-05 43 3.05176e-05 21.5 3.05176e-05H0V124Z" fill="currentColor"/>
    </svg>
</div>

  <section id="newsletter" class="w-full h-full bg-gradient-to-b from-cyan-300/50 via-teal-100/10 to-teal-200 dark:from-pink-300/0 dark:to-rose-300/0 px-4">
    <div class="max-w-6xl mx-auto py-12">
      <div class="flex flex-col-reverse items-center md:flex-row gap-8">  
        <div class="flex flex-col gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
            <a class="font-bold underline sm:no-underline sm:hover:underline" href="/newsletter" target="_blank">Design, Develop, Deploy 🚀</a> is a biweekly newsletter about web design and development. Each issue features an original project designed, developed, and deployed by me!
          </h3>

          <Subscribe />
        </div>

          <div class="">
            <div class="w-64 lg:w-96">
              <img src="/img/mary/marydotdev.png" alt="Mary Memoji" class="aspect-square rounded-lg" />
            </div>
        </div>
    </div>  
  </section>

  <div class="bg-indigo-300/50 text-teal-200 dark:invisible">
    <svg class="w-full"  viewBox="0 0 900 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 124L21.5 121.8C43 119.7 86 115.3 128.8 107.5C171.7 99.7 214.3 88.3 257.2 101.3C300 114.3 343 151.7 385.8 167C428.7 182.3 471.3 175.7 514.2 162.2C557 148.7 600 128.3 642.8 119.3C685.7 110.3 728.3 112.7 771.2 122.8C814 133 857 151 878.5 160L900 169V3.05176e-05H878.5C857 3.05176e-05 814 3.05176e-05 771.2 3.05176e-05C728.3 3.05176e-05 685.7 3.05176e-05 642.8 3.05176e-05C600 3.05176e-05 557 3.05176e-05 514.2 3.05176e-05C471.3 3.05176e-05 428.7 3.05176e-05 385.8 3.05176e-05C343 3.05176e-05 300 3.05176e-05 257.2 3.05176e-05C214.3 3.05176e-05 171.7 3.05176e-05 128.8 3.05176e-05C86 3.05176e-05 43 3.05176e-05 21.5 3.05176e-05H0V124Z" fill="currentColor"/>
    </svg>
</div>

  <section id="content" class="w-full h-full bg-gradient-to-b from-indigo-300/50 via-purple-200/10 to-violet-300 dark:from-pink-300/0 dark:to-rose-300/0 px-4">
    <div class="max-w-6xl mx-auto py-12">
      <div class="flex flex-col justify-center items-center md:flex-row gap-8">  
          <div class="">
              <div class="">
                <Matter />
              </div>
          </div>

          <div class="max-w-2xl mx-auto flex flex-col gap-8 items-end">
            <h2 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
                <span>I write about UI/UX design, front-end development, and other tech related topics (and sometimes non tech stuff) on my <a href="/blog" class="underline sm:no-underline sm:hover:underline">blog</a>.</span>
            </h2>

            <h2 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">
              <span>Find updates about my side projects, demos, and experiments on the <a href="/projects" class="underline sm:no-underline sm:hover:underline">projects</a> page.</span>
            </h2>
        </div>
      </div>
  </section>

  <div class="bg-light text-violet-300 dark:invisible">
    <svg class="w-full"  viewBox="0 0 900 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 124L21.5 121.8C43 119.7 86 115.3 128.8 107.5C171.7 99.7 214.3 88.3 257.2 101.3C300 114.3 343 151.7 385.8 167C428.7 182.3 471.3 175.7 514.2 162.2C557 148.7 600 128.3 642.8 119.3C685.7 110.3 728.3 112.7 771.2 122.8C814 133 857 151 878.5 160L900 169V3.05176e-05H878.5C857 3.05176e-05 814 3.05176e-05 771.2 3.05176e-05C728.3 3.05176e-05 685.7 3.05176e-05 642.8 3.05176e-05C600 3.05176e-05 557 3.05176e-05 514.2 3.05176e-05C471.3 3.05176e-05 428.7 3.05176e-05 385.8 3.05176e-05C343 3.05176e-05 300 3.05176e-05 257.2 3.05176e-05C214.3 3.05176e-05 171.7 3.05176e-05 128.8 3.05176e-05C86 3.05176e-05 43 3.05176e-05 21.5 3.05176e-05H0V124Z" fill="currentColor"/>
    </svg>
</div>

  <section>
    <div class="max-w-6xl mx-auto flex flex-col gap-12 px-4 pb-24">
      <div>
        <div class="py-8">
          <a class="hover:underline" href="/blog">
          <h4 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">Featured Posts</h4>
          </a>
        </div>
        
        
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {#each recentPosts as post}
            <div>
              <PostPreview {post} />
            </div>
          {/each}
        </div>
      </div>
  </section>

</div>
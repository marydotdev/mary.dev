<script context="module">
    export const prerender = true
    export const load = async ({ fetch }) => {
      return {
        props: {
          recentProjects: await fetch('/projects.json?limit=2').then((res) => res.json()),
        }
      }
    }
  </script>

<script>
import { name } from '$lib/info.js'
import ProjectPreview from '$lib/components/ProjectPreview.svelte';
import SmallStuff from '$lib/components/SmallStuff.svelte';

export let recentProjects

</script>

<svelte:head>
  <title>{name} | Work</title>
</svelte:head>

<div class="max-w-6xl mx-auto px-4 pt-4 pb-2 md:pt-24">
  <div class="flex flex-col items-center sm:flex-row sm:justify-between">
      <div class="max-w-xl flex flex-col items-start">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl leading-10 font-bold tracking-tighter">
                <span>Let's work together.</span>
                <br />
                <span>Send me an <a href="mailto:mary.haedrich@gmail.com" target="_blank" class="underline sm:no-underline sm:hover:underline">Email</a>, DM me on <a href="https://twitter.com/marydotdev" target="_blank" class="underline sm:no-underline sm:hover:underline">Twitter</a>, or checkout my <a href="https://www.fiverr.com/mhaedrich" target="_blank" class="underline sm:no-underline sm:hover:underline"><span class="italic">a la carte</span> menu</a>.</span>
            </h1>

            <a href="mailto:mary.haedrich@gmail.com" target="_blank">
            <div class="relative w-fit group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse group-hover:animate-none" />

                    <div class="relative mt-8 md:mt-12 p-4 flex items-center gap-3 rounded-lg bg-light dark:bg-dark">
                        <div class="rounded-full w-4 h-4 bg-green-400 border-2 border-green-600" />
                        <p class="tracking-tight text-xl md:text-2xl font-medium">
                            Message Me
                        </p>
                    </div>
                </div>
            </a>    
        </div>

        <div class="lg:min-w-fit">
          <SmallStuff />
        </div>

      </div>

    <section class="py-8">
        <div class="max-w-6xl mx-auto flex flex-col gap-12 p-4">
          <div>
            <div class="py-8">
              <a class="hover:underline" href="/projects">
              <h4 class="text-2xl sm:text-3xl md:text-4xl leading-10 font-medium tracking-tighter">Recent Projects</h4>
              </a>
            </div>
            
            
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {#each recentProjects as project}
                <div>
                  <ProjectPreview {project} />
                </div>
              {/each}
            </div>
          </div>
      </section>

    <section class="max-w-6xl mx-auto px-4">
    <div class="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-start">
        <div>
            <h4 class="text-2xl font-medium">Design</h4>
            <ul>
                <li>Figma</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
            </ul>
        </div>
        
        <div>
            <h4 class="text-2xl font-medium">Front End</h4>
            <ul>
                <li>JavaScript</li>
                <li>Svelte</li>
                <li>React</li>
                <li>Next JS</li>
            </ul>
        </div>

        <div>
            <h4 class="text-2xl font-medium">Data</h4>
            <ul>
                <li>SQL</li>
                <li>R</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>

        <div>
            <h4 class="text-2xl font-medium">Deployment</h4>
            <ul>
                <li>Git</li>
                <li>Vercel</li>
                <li>Netlify</li>
            </ul>
        </div>
    </div>
</section>

</div>

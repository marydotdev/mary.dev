<script>
    import { name } from '$lib/info.js'
</script>

<svelte:head>
  <title>{name} | Projects</title>
</svelte:head>

<div class="max-w-4xl mx-auto font-display">
    <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4">Projects & Experiments</h1>

    <div class="flex flex-col gap-4">
        <p class="text-2xl sm:text-3xl">A collection of past work, current projects, and future plans.</p>
    </div>    

    <section class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a href="https://rickandmortypedia.vercel.app/" target="_blank" class="flex flex-col justify-center items-center gap-2 hover:transform hover:scale-110 transition ease-out duration-300">
                    <div class="w-72 h-72 bg-dark dark:bg-light">
                        <img src="/rickandmortypedia-cover.png" alt="RickandMortyPedia Cover Art" />
                    </div>
                </a>

                <a href="/" class="flex flex-col justify-center items-center gap-2 hover:transform hover:scale-110 transition ease-out duration-300">
                    <div class="w-72 h-72">
                        <img src="/preview.png" alt="Coming Soon" />
                    </div>
                </a>

                <a href="https://simple-sveltekit-starter.vercel.app/" target="_blank" class="flex flex-col justify-center items-center gap-2 hover:transform hover:scale-110 transition ease-out duration-300">
                    <div class="w-72 h-72 bg-dark dark:bg-light">
                        <img src="/simplesveltekit-cover.png" alt="Simple SvelteKit Starter Cover Art" />
                    </div>
                </a>

                <a href="/" class="flex flex-col justify-center items-center gap-2 hover:transform hover:scale-110 transition ease-out duration-300">
                    <div class="w-72 h-72">
                        <img src="/preview.png" alt="Coming Soon" />
                    </div>
                </a>

                <a href="https://myceliumhealth.vercel.app/" target="_blank" class="flex flex-col justify-center items-center gap-2 hover:transform hover:scale-110 transition ease-out duration-300">
                    <div class="w-72 h-72">
                        <img src="/mycelium-cover.png" alt="Mycelium Cover Art" />
                    </div>
                </a>

                <a href="/" class="flex flex-col justify-center items-center gap-2 hover:transform hover:scale-110 transition ease-out duration-300">
                    <div class="w-72 h-72 bg-dark dark:bg-light">
                        <img src="/preview.png" alt="Coming Soon" />
                    </div>
                </a>                
            </div>
    </section>
</div>
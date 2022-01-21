<script>
    import Jam from "$lib/components/Jam.svelte";
    import { name } from '$lib/info.js'
</script>

<svelte:head>
  <title>{name} | 😎</title>
</svelte:head>

<section class="mx-auto flex justify-center">
    <div class="max-w-4xl w-full flex flex-col justify-center gap-4 font-display">
        <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4">Let's Jam</h1>
        
        <div class="flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:gap-4">
            <div class="w-3/4 md:w-1/2">
                <Jam />
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-between gap-8">
                <div class="flex flex-col gap-4">
                    <p class="text-2xl sm:text-3xl">I'm a <span class="underline decoration-pink-400"><a href="https://jamstack.wtf" target="_blank" class="hover:text-zinc-600 dark:hover:text-zinc-400">Jamstack developer</a></span> 
                        interested in user interface and user experience design.</p> 
                    <p class="text-lg sm:text-xl">I'm happiest when I get to solve problems by thinking creatively.</p>
                    <p class="text-lg sm:text-xl">I love the intersections between design, code, and technology.</p>
                    <p class="text-lg sm:text-xl">I'm driven by my desire to make a positive contribution to humanity and planet Earth.</p>
                </div>
                <div>
                    <p class="text-xl sm:text-2xl text-right"><a href="/about" class="hover:text-zinc-600 dark:hover:text-zinc-400">Learn more about me &rarr;</a></p>
                    <p class="text-xl sm:text-2xl text-right"><a href="/hire-me" class="hover:text-zinc-600 dark:hover:text-zinc-400">Work with me &rarr;</a></p>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    import { name } from '$lib/info.js'
</script>

<svelte:head>
  <title>{name} | About Me</title>
</svelte:head>

<div class="max-w-4xl mx-auto font-display">
    <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4">About Me</h1>

    <div class="flex flex-col gap-4">
        <p class="text-2xl">My name is Mary and I'm a front-end developer from New York focused on creating fast, responsive web apps.</p>
        
        <div class="max-w-xl mx-auto py-4">
            <img src="/marypic.jpeg" alt="semi professional headshot of mary" class="rounded-lg" />
        </div>
        
        <p class="text-xl">
            In 2017 I graduated from Fordham University with a BA in New Media & Digital Design, decided I actually wanted to be a doctor, did a post-bac for three years while working as a medical scribe to complete the med school prereqs, finished the post-bac as the pandemic started, was unemployed and got back into web design and programming, took the MCAT and realized I actually don't want to wait another four years (at least) to start my career, and finally decided to pursue a career in technology as per the original plan.
        </p>
        <p class="text-xl">
            Eventually I want to combine my interests in medicine, technology, and entrepreneurship to start my own biotechnology company. Right now, I want to learn as much as I can from anyone willing to teach me.  
        </p>

    </div>    
</div>
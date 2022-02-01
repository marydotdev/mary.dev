<script>
    import { name } from '$lib/info.js'

</script>

<svelte:head>
  <title>{name} | About Me</title>
</svelte:head>

<div class="max-w-4xl mx-auto font-display">
    <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4">About Me</h1>

    <div class="flex flex-col justify-center mx-auto gap-4">        
        <div class="grid sm:grid-cols-2 items-center gap-4 sm:gap-0">
            <img class="w-64 h-64 md:w-72 md:h-72 rounded-xl mx-auto" src="/marypic.jpeg" alt="semi professional headshot of mary" />
            <p class="text-2xl sm:text-3xl md:text-4xl">My name is Mary and I'm a front-end developer from New York focused on creating fast, responsive web apps.</p>
        </div>
      
        <p class="text-2xl">
            Someday, I <span class="line-through">would like to</span> will combine my interests in medicine, technology, and entrepreneurship to start my own biotechnology company. Right now, I want to learn as much as I can from anyone willing to teach me.  
        </p>
    </div>           
</div>



    
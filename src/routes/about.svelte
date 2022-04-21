<script>
  import { name } from '$lib/info.js'
</script>
    
<svelte:head>
  <title>{name} | About</title>
</svelte:head>
    
<div class="w-full max-w-6xl mx-auto flex flex-col gap-8 justify-center py-8 px-2">
  <h1 class="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter">Hi, I'm Mary.</h1>

  <div class="">
      <div class="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter">
        <h2>
          I'm a full stack developer 
          <br />
          from New York. 
        </h2>
      </div>
  </div>

  <div class="px-6 py-4 text-xl md:text-2xl rounded-full bg-dark/10 dark:bg-light/10">
    <ul class="min-w-full text-xl md:text-2xl flex flex-row justify-start sm:justify-around gap-12 overflow-x-scroll hide-scrollbar cursor-grab touch-pan-x sm:cursor-auto">
      <li><a href="mailto:mary.haedrich@gmail.com" target="_blank" class="underline sm:hover:underline sm:no-underline">Email</a></li>
      <li><a href="https://github.com/marydotdev" target="_blank" class="underline sm:hover:underline  sm:no-underline">Github</a></li>
      <li><a href="https://twitter.com/marydotdev" target="_blank" class="underline sm:hover:underline sm:no-underline">Twitter</a></li>
      <li><a href="https://dribbble.com/marydotdev" target="_blank" class="underline sm:hover:underlin  sm:no-underline">Dribbble</a></li>
      <li><a href="/resume" class="underline sm:hover:underline sm:no-underline">Resume</a></li>
    </ul>
  </div>

  <div class="">
    <div class="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
      <h3>
        In 2017 I graduated from <a class="underline sm:no-underline sm:hover:underline" href="https://www.fordham.edu/" target="_blank">Fordham University</a>  
        with a B.A. in <a class="underline sm:no-underline sm:hover:underline" href="https://www.fordham.edu/info/20709/new_media_and_digital_design" target="_blank">New Media & Digital Design</a>.
      </h3>
    </div>
</div>

<div class="">
  <div class="text-2xl sm:text-3xl md:text-4xl font-medium">
    <h4>
      After I graduated, I started a post-baccalaureate science program at <a class="underline sm:no-underline sm:hover:underline" href="https://www.farmingdale.edu/" target="_blank">SUNY Farmingdale</a>. 
      I finished the <a class="underline sm:no-underline sm:hover:underline" href="https://www.farmingdale.edu/curriculum/cert-health.shtml" target="_blank">Sciences for the Health Professions</a> program in May 2020, a few months after our first Covid-19 lockdown began.
    </h4>
  </div>
</div>  
</div>

<style>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
    
        
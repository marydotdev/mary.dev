<script>
  import Chat from '$lib/components/Chat.svelte';
  import { name } from '$lib/info.js'
</script>
    
<svelte:head>
  <title>{name} | About</title>
</svelte:head>
    
<div class="w-full max-w-6xl mx-auto flex flex-col justify-center py-8 px-2">
  <h1 class="text-7xl font-bold tracking-tighter">Hi, I'm Mary.</h1>

  <div class="py-8">
      <div class="text-5xl font-medium tracking-tight">
        <h2>
          I'm a full stack developer 
          <br />
          from New York. 
        </h2>
      </div>
  </div>

  <div>
    <ul class="text-2xl space-y-4">
      <li><a href="mailto:mary.haedrich@gmail.com" class="underline sm:hover:underline sm:no-underline">Email</a></li>
      <li><a href="https://github.com/marydotdev" class="underline sm:hover:underline sm:no-underline">Github</a></li>
      <li><a href="https://twitter.com/marydotdev" class="underline sm:hover:underline sm:no-underline">Twitter</a></li>
      <li><a href="https://dribbble.com/marydotdev" class="underline sm:hover:underline sm:no-underline">Dribbble</a></li>
      <li><a href="/resume" class="underline sm:hover:underline sm:no-underline">Resume</a></li>
    </ul>
  </div>


</div>
    
        
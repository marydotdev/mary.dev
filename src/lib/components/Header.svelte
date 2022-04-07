<script>
  import ThemeToggle from './ThemeToggle.svelte';
  import MobileNav from './MobileNav.svelte';
  import { Icon } from '@steeze-ui/svelte-icon';
  import {Home, User, Pencil, LightningBolt} from '@steeze-ui/heroicons'

</script>
  
<div class="w-full fixed top-0 left-0 z-30 bg-light dark:bg-dark">
<div class="max-w-6xl px-4 mx-auto py-4 flex justify-between items-center md:text-md lg:text-lg font-medium tracking-tight">
  <div>
    <a href="/">
    <img src="/maryicon.png" alt="marydotdev icon" class="w-16" />
    </a>
  </div>
  <div class="hidden md:flex justify-around items-center gap-8 p-4 rounded-lg bg-light/50 dark:bg-dark/30 backdrop-blur-lg">
    <a href="/" class="hidden relative group md:block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
      <div class="absolute -inset-1 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />
      <div class="hidden relative md:flex md:justify-center md:items-center gap-2 px-3 py-2 rounded-md bg-light dark:bg-dark">
        <Icon src={Home} theme='outline' size="24" class="relative text-dark dark:text-light" />
        <p>Home</p>
      </div>
    </a>
    <a href="/about" class="hidden relative group md:block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
      <div class="absolute -inset-1 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div class="hidden relative md:flex md:justify-center md:items-center gap-2 px-3 py-2 rounded-md bg-light dark:bg-dark">
        <Icon src={User} theme='outline' size="24" class="relative text-dark dark:text-light" />
        <p>About</p>
      </div>
    </a>
    <a href="/blog" class="hidden relative group md:block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
      <div class="absolute -inset-1 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div class="hidden relative md:flex md:justify-center md:items-center gap-2 px-3 py-2 rounded-md bg-light dark:bg-dark">
        <Icon src={Pencil} theme='outline' size="24" class="relative text-dark dark:text-light" />
        <p>Blog</p>
      </div>
    </a> 

    <a href="/work" class="hidden relative group md:block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
      <div class="absolute -inset-1 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div class="hidden relative md:flex md:justify-center md:items-center gap-2 px-3 py-2 rounded-md bg-light dark:bg-dark">
        <Icon src={LightningBolt} theme='outline' size="24" class="relative text-dark dark:text-light" />
        <p>Work</p>
      </div>
    </a>
    
    </div>

    <div class="hidden relative group md:block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
      <div class="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <ThemeToggle />
    </div>
    
    <MobileNav />
  </div>
</div>
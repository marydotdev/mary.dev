<script>
  import ThemeToggle from './ThemeToggle.svelte';
  import MobileNav from './MobileNav.svelte';
  import { Icon } from '@steeze-ui/svelte-icon';
  import {Home, User, Pencil, LightningBolt, PaperAirplane, Code, Newspaper, VideoCamera, Link, Mail, ShoppingBag, Bookmark, BookmarkAlt} from '@steeze-ui/heroicons'
  import CartoonMary from './CartoonMary.svelte';

  
</script>
  
<nav class="w-full fixed top-0 sm:top-0 left-0 z-30">
<div class="hidden w-full px-4 mx-auto pb-1 sm:flex justify-center items-center text-xs font-medium tracking-tight bg-light/80 dark:bg-dark/80 backdrop-blur-xl">
  <div class="w-full pt-2">
    <div class="max-w-6xl mx-auto flex justify-between">
      <CartoonMary />

  <ul class="hidden sm:flex justify-center items-center gap-4 px-4 rounded-lg">
    <li class="relative flex flex-col items-center group">
      <a href="/" class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
        <div class="absolute -inset-1 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />
        <div class="w-fit relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
          <Icon src={Home} theme='outline' size="30" class="relative text-dark dark:text-light" />
        </div>
      </a>
      <span class="absolute -bottom-8">
        <span class="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200">
          <a href="/">Home</a>
        </span>
      </span>
    </li>

    <li class="relative flex flex-col items-center group">
      <a href="/about" class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
        <div class="absolute -inset-1 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div class="relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
          <Icon src={User} theme='outline' size="30" class="relative text-dark dark:text-light" />
        </div>
      </a>
      <span class="absolute -bottom-8">
        <span class="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200">
          <a href="/about">About</a>
        </span>
      </span>
    </li>

    <li class="relative flex flex-col items-center group">
      <a href="/blog" class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
        <div class="absolute -inset-1 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div class="relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
          <Icon src={Pencil} theme='outline' size="30" class="relative text-dark dark:text-light" />
        </div>
      </a>
      <span class="absolute -bottom-8">
        <span class="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200">
          <a href="/blog">Blog</a>
        </span>
      </span>
    </li>

    <li class="relative flex flex-col items-center group">
      <a href="/projects" class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
        <div class="absolute -inset-1 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div class="relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
          <Icon src={LightningBolt} theme='outline' size="30" class="relative text-dark dark:text-light" />
        </div>
      </a>
      <span class="absolute -bottom-8">
        <span class="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200">
          <a href="/projects">Projects</a>
        </span>
      </span>
    </li>

    <!-- <li class="relative flex flex-col items-center group">
      <a href="/links" class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
        <div class="absolute -inset-1 bg-gradient-to-br from-blue-300 to-sky-400 dark:from-blue-500 dark:to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div class="relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
          <Icon src={Link} theme='outline' size="30" class="relative text-dark dark:text-light" />
        </div>
      </a>
      <span class="absolute -bottom-8">
        <span class="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200">
          <a href="/links">Links</a>
        </span>
      </span>
    </li>

    <li class="relative flex flex-col items-center group">
      <a href="/contact" class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
        <div class="absolute -inset-1 bg-gradient-to-br from-indigo-300 to-indigo-500 dark:from-indigo-400 dark:to-indigo-700 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div class="relative flex flex-col justify-center items-center px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
          <Icon src={Mail} theme='outline' size="30" class="relative text-dark dark:text-light" />
        </div>
      </a>
      <span class="absolute -bottom-8">
        <span class="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200">
          <a href="/contact">Contact</a>
        </span>
      </span>
    </li> -->
    
    <li>
        <ThemeToggle />
    </li>
    </ul>
    <div class="invisible">
      <CartoonMary />
    </div>
  </div>
  </div>
  </div>

  <span class="sm:hidden w-full flex justify-between items-center bg-light/80 dark:bg-dark/80 backdrop-blur-md">
    <span class="pl-4 pt-2 pb-2">
      <CartoonMary />
    </span>
    
    <MobileNav />
  </span>  
</nav>
<script>
    import { HomeIcon, UserIcon, Edit2Icon, ZapIcon } from 'svelte-feather-icons';
    import ThemeToggle from './ThemeToggle.svelte';
    import MobileNav from './MobileNav.svelte';
    import Tooltip from './Tooltip.svelte';
  
  </script>
  
  <nav class="sticky z-50 top-0 mb-4 sm:mb-12 max-w-7xl pt-6 px-6 pb-4 mx-auto w-full bg-light text-dark dark:bg-dark dark:text-light backdrop-filter backdrop-blur-lg bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-60">
    <div class="flex justify-between items-start">
        <div class="flex justify-start">
            <a href="/" class="font-display font-medium tracking-tight text-2xl md:text-3xl  hover:transform hover:scale-110 transition ease-out duration-500">
                mary.dev
            </a>   
        </div>
  
        <div class="hidden sm:flex justify-around items-center gap-8 max-w-2xl px-4 py-2 rounded-lg bg-dark/10 dark:bg-light/10">
          <Tooltip title="Home">
            <a href="/" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">  
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
                    <HomeIcon size="2x" />
              </div>
            </a>
          </Tooltip> 
  
            <Tooltip title="About">
              <a href="/about" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">   
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
                    <UserIcon size="2x" />
                  
              </div>
            </a>
            </Tooltip>
  
            <Tooltip title="Blog">
              <a href="/posts" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
               <Edit2Icon size="2x" />
              </div>
              </a>  
            </Tooltip>
  
            <Tooltip title="Work">
              <a href="/work" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
                <ZapIcon size="2x" />
              </div>
            </a>
            </Tooltip>
  
        </div>
  
    <div class="flex justify-end">
      <div class="hidden sm:block">
          <ThemeToggle />
      </div>
      
      <MobileNav />
    </div>
  </div>
</nav>
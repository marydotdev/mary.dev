<script>
    import { HomeIcon, UserIcon, Edit2Icon, ZapIcon } from 'svelte-feather-icons';
    import ThemeToggle from './ThemeToggle.svelte';
    import MobileNav from './MobileNav.svelte';
    import Tooltip from './Tooltip.svelte';
  
  </script>
  
  <nav class="sticky z-50 top-0 mb-4 sm:mb-12 max-w-7xl pt-6 px-6 pb-4 mx-auto w-full bg-light text-dark dark:bg-dark dark:text-light backdrop-filter backdrop-blur-lg bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-60">
    <div class="flex justify-between items-start">
        <div class="flex justify-start">
            <a href="/" class="font-display font-medium tracking-tight text-2xl md:text-3xl">
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
  
            <Tooltip title="Projects">
              <a href="/projects" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
                <ZapIcon size="2x" />
              </div>
            </a>
            </Tooltip>

            <Tooltip title="Let's Jam">
              <a href="/lets-jam" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 25V7.5C24 6.219 24.5 4 27 4C29.5 4 30 6.219 30 7.5V30L37 23C38.297 21.703 40.078 21.078 41.5 22.5C42.922 23.922 43.094 25.406 41.5 27L35 33.5C35 33.5 29.094 44 26 44H13C13 44 10 44 8 42C6 40 6 37.5 6 37.5V12.781C6 12.062 6.5 10 9 10C11.5 10 12 12 12 12.781V25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 22C18 20.3431 16.6569 19 15 19C13.3431 19 12 20.3431 12 22V28C12 29.6569 13.3431 31 15 31C16.6569 31 18 29.6569 18 28V22Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                  <path d="M24 22C24 20.3431 22.6569 19 21 19C19.3431 19 18 20.3431 18 22V28C18 29.6569 19.3431 31 21 31C22.6569 31 24 29.6569 24 28V22Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
              </svg>
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
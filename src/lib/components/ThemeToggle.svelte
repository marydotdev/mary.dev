<script>
  import {Icon} from '@steeze-ui/svelte-icon'
  import {Sun, Moon} from '@steeze-ui/heroicons'
  import { browser } from '$app/env';

  export let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
</script>

    <button
        type="button"
        role="switch"
        aria-label="Toggle Dark Mode"
        aria-checked={!prefersLight}
        class=""
        on:click={() => {
          prefersLight = !prefersLight
          localStorage.setItem('prefersLight', prefersLight.toString())

          if (prefersLight) {
            document.querySelector('html').classList.remove('dark')
          } else {
            document.querySelector('html').classList.add('dark')
          }
        }}
      >
          {#if prefersLight}
          <div class="relative flex flex-col items-center group">
            <span class="relative group block rounded-md hover:transform hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:absolute -inset-1 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />
              <div class="w-fit relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
                <Icon src={Sun} theme='outline' size="30" class="relative text-dark dark:text-light" />
              </div>
            </span>
            <span class="absolute -bottom-10 sm:-bottom-8">
              <span class="opacity-100 sm:opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark sm:outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200 font-medium text-lg sm:font-regular sm:text-xs">
                Light
              </span>
            </span>
          </div>
          {:else}
          <div class="relative flex flex-col items-center group">
            <span class="relative group block rounded-md sm:hover:transform sm:hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:absolute -inset-1 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />
              <div class="w-fit relative flex flex-col justify-center items-center gap-2 px-3 py-2 rounded-xl bg-dark/10 dark:bg-light/10">
                <Icon src={Moon} theme='outline' size="30" class="relative text-dark dark:text-light" />
              </div>
            </span>
            <span class="absolute -bottom-10 sm:-bottom-8">
              <span class="opacity-100 sm:opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md bg-light dark:bg-dark sm:outline outline-1 outline-zinc-300 dark:outline-zinc-700 transition duration-800 group-hover:duration-200 font-medium text-lg sm:font-regular sm:text-xs">
                Dark
              </span>
            </span>
          </div>
          {/if}
    </button>



    


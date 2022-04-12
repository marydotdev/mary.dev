<script>
  import {Icon} from '@steeze-ui/svelte-icon'
  import {Sun, Moon} from '@steeze-ui/heroicons'
  import { browser } from '$app/env';

  export let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
</script>

  {#if browser}
    <button
        type="button"
        role="switch"
        aria-label="Toggle Dark Mode"
        aria-checked={!prefersLight}
        class="flex gap-4 md:justify-center items-center md:relative md:gap-2 md:px-3 md:py-2 md:rounded-md md:bg-light md:dark:bg-dark"
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
          <span class="flex items-center gap-4">
            <Icon src={Sun} theme='outline' size="24" class="relative" />
            <p class="md:sr-only">Light</p>
          </span>
          {:else}
          <span class="flex items-center gap-4">
            <Icon src={Moon} theme='outline' size="24" class="relative" />
            <p class="md:sr-only">Dark</p>
          </span>
          {/if}
    </button>
  {/if}

  <!-- <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
  </label> -->
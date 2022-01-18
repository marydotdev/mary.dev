<script>
    import { MoonIcon, SunIcon } from 'svelte-feather-icons';
    import { browser } from '$app/env';

    let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
</script>


{#if browser}
        <button
          type="button"
          role="switch"
          aria-label="Toggle Dark Mode"
          aria-checked={!prefersLight}
          class="flex justify-center items-center w-6 h-6"
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
            <MoonIcon size="1.5x" />
          {:else}
            <SunIcon size="1.5x" />
          {/if}
        </button>
      {/if}
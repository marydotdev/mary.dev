<script>
  import '../app.css'
  import '../prism.css'
  import 'focus-visible'
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { fade } from 'svelte/transition';
  
  let y;
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
</script>

<div class="flex flex-col min-h-screen">
  <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
   <Header />

    <!-- Scroll to Top button START-->
    {#if y > 500}
    <button on:click={scrollToTop} type="button" 
    class="block fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl bg-dark dark:bg-light bg-opacity-10 backdrop-blur-md dark:bg-opacity-10 hover:transform hover:scale-110"
    transition:fade="{{ duration: 500 }}">
      <span class="sr-only">scroll to top</span>
            &uarr;
    </button>
    {/if}
    <!-- Scroll to Top button END -->

    <main
      class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full flex-grow py-4 px-4"
    >
      <slot />
    </main>
    <Footer />
  </div>
</div>

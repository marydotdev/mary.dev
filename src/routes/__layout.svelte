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

<svelte:window bind:scrollY={y}/>
<div class="max-w-full h-screen">
  <div class="flex flex-col bg-light text-dark dark:bg-dark dark:text-light h-screen">
   <Header />

    <!-- Scroll to Top button START-->
    {#if y > 500}
    <button on:click={scrollToTop} type="button" 
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl bg-dark dark:bg-light bg-opacity-10 backdrop-blur-md dark:bg-opacity-10 hover:transform hover:scale-110"
    transition:fade="{{ duration: 500 }}">
      <span class="sr-only">scroll to top</span>
            &uarr;
    </button>
    {/if}
    <!-- Scroll to Top button END -->

    <main class="grow px-4">
      <slot />
    </main>
    
    <Footer />
  </div>
</div>

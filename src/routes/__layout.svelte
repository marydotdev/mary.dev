<script>
  import '../app.css'
  import '../prism.css'
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';


</script>


<div class="min-h-screen flex flex-col">   
  
  <div class="sticky top-0 z-50">
    <Header />
  </div>
    

  <div class="grow">
    <slot />
  </div>
      
  <Footer />

</div>


<script>
  import '../app.css'
  import '../prism.css'
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';


</script>


<div class="min-h-screen flex flex-col overflow-x-hidden">   
  
  <div>
    <Header />
  </div>
    

  <div class="grow">
    <slot />
  </div>
      
  <Footer />

</div>


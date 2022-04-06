<script>
    import { name } from '$lib/info.js'
  </script>
      
  <svelte:head>
    <title>{name} | Newsletter</title>
  </svelte:head>
      
  <div class="w-full max-w-4xl mx-auto flex flex-col justify-center py-8 px-2">
      <div class="w-48 lg:w-64 mx-auto">
          <img src="/img/mary/marydotdev.png" alt="mary memoji with laptop" />
      </div>
    <h1 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter">Design, Develop, Deploy 🚀</h1>
  
    <div class="py-8">
        <div class="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight">
          <h2>
            A biweekly newsletter about web design and development, featuring a new project or experiment built by me!
          </h2>
        </div>
    </div>
  
    <div>
      
<div class="max-w-2xl mx-auto my-4 p-4">
    
    <form
    action="https://buttondown.email/api/emails/embed-subscribe/marydotdev"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/marydotdev', 'popupwindow')"
    class="relative my-2 w-full md:w-3/4 mx-auto"
    >
        <!-- <label for="bd-email">Enter your email</label> -->
        <input type="email" name="email" id="bd-email"
        class="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-light/10 text-dark dark:text-light pr-32" />
        <button type="submit" value="Subscribe"
        class="flex items-center justify-center absolute right-1 top-1 px-4 py-1 tracking-tight font-bold h-8 bg-blue-600 hover:bg-green-500 text-white rounded-md">
        Subscribe
        </button>
        <p class="flex justify-center pt-4 text-sm">
            <a href="https://buttondown.email" target="_blank" class="hover:underline">Powered by Buttondown.</a>
        </p>
    </form>
</div>
    </div>
  </div>
      
          
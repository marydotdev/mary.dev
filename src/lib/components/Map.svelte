<script>

</script>

<div class="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
    <div class="p-4 text-xl md:text-2xl bg-dark/10 dark:bg-light/10">
        <p class="font-bold tracking-tighter pb-4">Frequent Locations</p>
        <div class="space-y-4">
          <div class="flex gap-4 items-center">
              <div class="w-6 h-6 bg-blue-400 rounded-full" /> 
              <a href="/" class="underline sm:hover:underline sm:no-underline">West Islip, NY</a>
            </div>
          <div class="flex gap-4 items-center">
              <div class="w-6 h-6 bg-green-400 rounded-full" /> 
              <a href="/" class="underline sm:hover:underline sm:no-underline">New York, NY</a>
            </div>
          <div class="flex gap-4 items-center">
              <div class="w-6 h-6 bg-pink-400 rounded-full" /> 
              <a href="/" class="underline sm:hover:underline sm:no-underline">Milford, CT</a>
            </div>
        </div>
      </div>


    <div class="relative max-w-3xl w-full border-4 border-dark dark:border-light">
        <div class="w-full">
            <img src="/img/map.png" alt="map" class="" />
        </div>
        <div class="absolute inset-0 w-full">
            <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="map">
                <circle id="West Islip" cx="347.5" cy="267.5" r="7.5" class="text-blue-400" fill="currentColor"/>
                <circle id="Fordham" cx="153.5" cy="252.5" r="7.5" class="text-green-400" fill="currentColor"/>
                <circle id="Milford" cx="426.5" cy="64.5" r="7.5" class="text-pink-400" fill="currentColor"/>
                </g>
            </svg>
        </div>
    </div>
</div>



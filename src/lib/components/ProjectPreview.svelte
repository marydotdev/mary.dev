<script>
  export let project
</script>
  <div class="flex flex-col rounded-lg overflow-hidden sm:hover:transition sm:hover:transform sm:hover:scale-[1.03] sm:duration-150">
    <div class="bg-dark/5 dark:bg-light/5 p-6 flex flex-col">
        <a href={project.homepage} target="_blank" rel="external" class="block mt-2">
          <p class="text-xl font-semibold text-dark dark:text-light line-clamp-1">{project.name}</p>
          <p class="mt-3 text-base text-dark dark:text-light opacity-80 line-clamp-2">{project.description}</p>
        </a>

      <div class="mt-6 flex justify-end">
          <a href={project.html_url} target="_blank" rel="external" class="hover:underline">
            <p class="font-bold">Learn More</p>
          </a>
        </div>
    </div>
  </div>

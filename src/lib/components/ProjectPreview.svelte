<script>
  export let project
</script>
  <div class="flex flex-col rounded-lg overflow-hidden sm:hover:transition sm:hover:transform sm:hover:scale-[1.03] sm:duration-150">
    <div class="flex-shrink-0">
      <img class="w-full h-96 object-cover" src={`/projects/${project.metadata.coverImage}`} alt="{project.slug}">
    </div>
    <div class="flex-1 bg-dark/5 dark:bg-light/5 p-6 flex flex-col justify-between">
      <div class="flex-1">
        <a href={`/projects/${project.slug}`} class="block mt-2">
          <p class="text-xl font-semibold text-dark dark:text-light">{project.title}</p>
          <p class="mt-3 text-base text-dark dark:text-light opacity-80 truncate">{project.metadata.tags}</p>
        </a>
      </div>
      <div class="mt-6 flex justify-end items-center">
        <div class="w-full flex-shrink-0 flex justify-between font-bold">
          <div class="flex gap-4">
            <a href={project.metadata.demoURL} target="_blank" class="hover:underline">
              <p>Live Demo</p>
            </a>
            <a href={project.metadata.sourceURL} target="_blank" class="hover:underline">
              <p>View Source</p>
            </a>
          </div>
          <a href={`/projects/${project.slug}`} class="hover:underline">
            <p>Read More</p>
          </a>
        </div>

      </div>
    </div>
  </div>

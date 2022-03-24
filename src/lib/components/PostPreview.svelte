<script>
  import { format, parseISO } from 'date-fns'

  export let post
</script>
  <div class="flex flex-col rounded-lg overflow-hidden sm:hover:transition sm:hover:transform sm:hover:scale-[1.03] sm:duration-150">
    <!-- <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" src={`/posts/${post.metadata.coverImage}`} alt="{post.slug}">
    </div> -->
    <div class="flex-1 bg-dark/5 dark:bg-light/5 p-6 flex flex-col justify-between">
      <div class="flex-1">
        <a href={`/blog/${post.slug}`} class="block mt-2">
          <p class="text-xl font-semibold">{post.title}</p>
          <p class="mt-3 line-clamp-2">{@html post.preview.html}</p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="https://twitter.com/marydotdev" target="_blank">
            <span class="sr-only">Mary Haedrich</span>
            <img class="h-10 w-10 rounded-full" src="/img/mary/professionalmary.jpeg" alt="Mary Haedrich">
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-dark dark:text-light">
            <a href="https://twitter.com/marydotdev" target="_blank" class="hover:underline">Mary Haedrich</a>
          </p>
          <div class="flex space-x-1 text-sm text-dark dark:text-light opacity-80">
            <time>{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</time>
            <span aria-hidden="true"> &middot; </span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

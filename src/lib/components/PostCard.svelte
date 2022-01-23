<script>
  import { format } from 'date-fns'

  export let post

</script>

<div class="font-display flex flex-col p-4 rounded-xl bg-light dark:bg-dark border-4 border-zinc-200 dark:border-zinc-700 sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
  <div>
    <a href={`/posts/${post.slug}`} class="!no-underline">
      <h3 class="!mt-0 !mb-2">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h3>

    <div class="opacity-70">
      <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
      •
      <span>{post.readingTime}</span>
    </div>
  </a>
  </div>
</div>

<script>
  import { format } from 'date-fns'

  export let post
</script>

<div class="font-display flex flex-col p-4 rounded-lg sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
  <div>

      <h2 class="!mt-0 !mb-2">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h2>

    <div class="opacity-70">
      <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
      •
      <span>{post.readingTime}</span>
    </div>
  </div>
  <div class="flex-1">{@html post.preview.html}</div>
  <slot name="actions">
    <div class="flex justify-end w-full">
      <a href={`/posts/${post.slug}`} class="!no-underline">Read More &rarr;</a>
    </div>
  </slot>
</div>

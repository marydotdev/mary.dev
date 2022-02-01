<script>
  import { format } from 'date-fns'

  export let post
</script>

<div class="font-display flex flex-col rounded-lg sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
  <div>
      <h3 class="!mt-0 !mb-2 !py-0">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h3>

    <div class="opacity-70">
      <time datetime={new Date(post.date).toISOString()}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
    </div>
  </div>
  <div class="flex-1">{post.description}</div>
    <div class="flex justify-end w-full">
      <a href={`/posts/${post.slug}`} class="!no-underline py-2">Read More &rarr;</a>
    </div>
</div>

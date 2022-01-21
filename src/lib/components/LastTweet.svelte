<script>
export let tweets
</script>

<div class="flex gap-2 pb-4">
    <svg class="w-8 h-8" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Twitter</title>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
    <h3 class="text-2xl">Recent Tweets</h3>
</div>


{#each $tweets as tweet}
<div class="flex flex-col mx-auto my-2 px-1 py-2 gap-2 w-full border-dark/50 dark:border-light/50 border-2 rounded-lg">
    <div class="flex justify-start items-center gap-2 px-2">
        <div>
            <img src="/static/marypic.jpeg" alt="avatar" class="bg-blue-300 rounded-full w-16 h-16" />
        </div>
        <div>
            <p class="text-xl font-medium">Mary Haedrich</p>
            <p class="text-md">@marydotdev</p>
        </div>
    </div>
<p class="text-lg px-4">{tweet.text}</p>
<p class="text-sm px-4">{tweet.created_at}</p>
<ul class="flex justify-around">
    <li class="flex justify-center items-center gap-1">
        <MessageCircleIcon size="1x" />
        <p>{tweet.public_metrics.reply_count}</p>
    </li>
    <li class="flex justify-center items-center gap-1">
        <RepeatIcon size="1x" />
       <p>{tweet.public_metrics.retweet_count}</p> 
    </li>
    <li class="flex justify-center items-center gap-1">
        <HeartIcon size="1x" />
        <p>{tweet.public_metrics.like_count}</p>
    </li>
</ul>
</div>
{/each}
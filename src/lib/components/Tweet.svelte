<script context="module">
    /**
    * @type {import('@sveltejs/kit').Load}
    */
    export async function load({ fetch }) {
        const url = `/api/twitter.json`;
        const res = await fetch(url);

        if (res.ok) {
			return {
				props: {
					tweets: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
    }
</script>

<script>
    import { HeartIcon, MessageCircleIcon, RepeatIcon, TwitterIcon } from 'svelte-feather-icons';
    import { format } from 'date-fns';

    export let tweets

    const singleTweet = tweets.shift();
    const authorUrl = `https://twitter.com/marydotdev`;
    const likeUrl = `https://twitter.com/intent/like?tweet_id=${singleTweet.id}`;
    const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${singleTweet.id}`;
    const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${singleTweet.id}`;
    const tweetUrl = `https://twitter.com/marydotdev/status/${singleTweet.id}`;
    const createdAt = new Date(singleTweet.created_at);

</script>

<div class="flex flex-col">
    <div class="">
        <div class="flex items-center gap-2 pb-4">
            <TwitterIcon size="1.5x" />
            <h3 class="text-2xl">Recently Tweeted</h3>
        </div>
                    
            <div class="flex flex-col px-4 pt-4 pb-2 gap-2 rounded-lg bg-dark dark:bg-light bg-opacity-10 dark:bg-opacity-10">
                <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                    <div class="flex justify-start gap-4">
                        <img src="/computermary.png" alt="avatar" class="w-16 h-16 rounded-full bg-black" /> 
                        <div class="flex flex-col">
                            <p class="text-xl font-medium">Mary Haedrich</p>
                            <p class="text-md">@marydotdev</p>
                        </div>
                    </div>
                </a>
    
                <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                    <p class="text-lg">{singleTweet.text}</p>
                </a>
                    
                <time
                    class="text-sm text-dark/60 dark:text-light/60"
                    title={`Time Posted: ${createdAt.toUTCString()}`}
                    dateTime={createdAt.toISOString()}
                >
                    {format(createdAt, 'h:mm a - MMM d, y')}
                </time>
    
                    <ul class="flex justify-around text-dark/60 dark:text-light/60">
                        <a href={replyUrl} target="_blank" rel="noopener noreferrer">
                            <li class="flex justify-center items-center gap-1">
                                <MessageCircleIcon size="1x" />
                                <p>{singleTweet.public_metrics.reply_count}</p>
                            </li>
                        </a>
                        <a href={retweetUrl} target="_blank" rel="noopener noreferrer">
                            <li class="flex justify-center items-center gap-1">
                                <RepeatIcon size="1x" />
                            <p>{singleTweet.public_metrics.retweet_count}</p> 
                            </li>
                        </a>
                        <a href={likeUrl} target="_blank" rel="noopener noreferrer">
                            <li class="flex justify-center items-center gap-1">
                                <HeartIcon size="1x" />
                                <p>{singleTweet.public_metrics.like_count}</p>
                            </li>
                        </a>
                    </ul>
            </div>
        </div>
</div>
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
    import { HeartIcon, MessageCircleIcon, RepeatIcon, TwitterIcon, MusicIcon } from 'svelte-feather-icons';
    import { name } from '$lib/info.js'
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

<svelte:head>
  <title>{name} | About Me</title>
</svelte:head>

<div class="max-w-4xl mx-auto font-display">
    <h1 class="text-3xl sm:text-5xl font-regular tracking-tight pb-4">About Me</h1>

    <div class="flex flex-col justify-center mx-auto gap-4">
        <p class="text-2xl pb-4">My name is Mary and I'm a front-end developer from New York focused on creating fast, responsive web apps.</p>
        
        <div class="grid md:grid-cols-2 gap-4 pb-8">
            <div>
                <img class="rounded-lg" src="/marypic.jpeg" alt="semi professional headshot of mary" />
            </div>
            <div class="flex flex-col">
                <div class="">
                    <div class="flex items-center gap-2 pb-4">
                        <TwitterIcon size="1.5x" />
                        <h3 class="text-2xl">Recently Tweeted</h3>
                    </div>
                                
                        <div class="flex flex-col px-4 pt-4 pb-2 gap-2 border-2 border-dark dark:border-light rounded-lg">
                            <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                                <div class="flex justify-start gap-4">
                                    <img src="/maryandlaptop.png" alt="avatar" class="w-16 h-16 rounded-full bg-black" /> 
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
        </div>   
        <p class="text-2xl">
            Someday, I <span class="line-through">would like to</span> will combine my interests in medicine, technology, and entrepreneurship to start my own biotechnology company. Right now, I want to learn as much as I can from anyone willing to teach me.  
        </p>

    </div>           
</div>



    
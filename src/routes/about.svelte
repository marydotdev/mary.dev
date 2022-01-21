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
    import { HeartIcon, MessageCircleIcon, RepeatIcon } from 'svelte-feather-icons';
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

    <div class="flex flex-col justify-center mx-auto gap-2">
        <p class="text-2xl pb-4">My name is Mary and I'm a front-end developer from New York focused on creating fast, responsive web apps.</p>
        
        <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <h3 class="text-2xl">Recently Tweeted</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-4 content-center">                
            <div class="flex flex-col px-4 py-2 gap-2 border-4 border-dark/60 dark:border-light/60 rounded-lg">
                <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                    <div class="flex justify-start gap-4">
                        <img src="/static/marypic.jpeg" alt="avatar" class="w-12 h-12 rounded-full" />
                                
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

            <div class="">
                <p class="text-2xl">
                    Someday, I would like to combine my interests in medicine, technology, and entrepreneurship to start my own biotechnology company. Right now, I want to learn as much as I can from anyone willing to teach me.  
                </p>
            </div>
        </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 pt-8">
            <div class="">
                    <p class="text-xl">
                        In 2017 I graduated from Fordham University with a BA in New Media & Digital Design, decided I actually wanted to be a doctor, did a post-bac for three years while working as a medical scribe to complete the med school prereqs, finished the post-bac as the pandemic started, was unemployed and got back into web design and programming, took the MCAT and realized I actually don't want to wait another four years (at least) to start my career, and finally decided to pursue a career in technology as per the original plan.
                    </p>
            </div>
            <div>
                <img class="rounded-lg" src="/marypic.jpeg" alt="semi professional headshot of mary" />
            </div>
        </div>
</div>
export async function get() {
    const queryParams = new URLSearchParams({
        expansions:
          'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
        'tweet.fields':
          'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
        'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
        'media.fields':
          'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
      });
    
    const token = import.meta.env.VITE_BEARER_TOKEN
    const endpointURL = `https://api.twitter.com/2/users/92410912/tweets?${queryParams}&max_results=5`;
    const res = await fetch(
        endpointURL, 
        {
        headers: {
            Authorization: `Bearer ${token}`
        }
        }
    );
    const data = await res.json();
  
  return {
      status: 200,
      body: data.data
  }
}
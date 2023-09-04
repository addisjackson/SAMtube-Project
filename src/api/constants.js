import { google } from 'googleapis';

const API_KEY=AIzaSyCUxeEoKKO4ItEMiG8HYZilQ9BMj6esfUE
const API_URL=`https://www.googleapis.com/youtube/v3/`

export async function fetchComments(videoId, maxResults=10) {
 try{   
    const response = await fetch(`${API_URL}/commentThreads?part=snippet&videoId=${id}&key=${API_KEY}&textFormat=plaintext&maxResults=${maxResults}`);
    const data = await response.json();
    if (data.items && data.items.length >0) {
        data.items.forEach((commentThread) => {
            const comment = {commentText: commentThread.snippet.topLevelComment.snippet.textDisplay,
                             commentAuthor: commentThread.snippet.topLevelComment.snippet.authorDisplayName,
                             publishedAt: commentThread.snippet.topLevelComment.snippet.publishedAt,
            };
            return comment
        });
    } else {
        return ' ';
    }
} catch (error) {
    console.error("Error fetching comments", error);
}
}

fetchComments();


export async function postComment(videoId, commentAuthor, commentText) {
        const requestBody = {
            snippet: {
                videoId: videoId,
                topLevelComment: {
                    snippet: {
                        textOriginal: commentText,
                        author: commentAuthor,
                    },
                },
            },
        }
     try {
        const response = await fetch(
           `${API_URL}/commentThreads?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
           }
        );
        const data = await response.json();
        if (data.id) {
            console.log('comment posted successfully with ID:', data.id);
        } else {
            console.log('Failed to post comment.');
        }
        } catch(error) {
            console.error(error);
        }
}
postComment()

const youtube = google.youtube ({
    version: 'v3',
    auth: API_KEY,
});

const searchQuery = 'your search query';

export default async function fetchVideos(videoId, maxResults=10) {
    try {
        const response = await youtube.search.list({
            type: 'video',
            part: 'snippet',
            id: videoId,
            maxResults: maxResults,
            order: 'date',
            q: searchQuery,
        })
        const videos = response.data.items;
        const videoProimises = videos.map(async (video) => {
        const videoResponse = await youtube.videos.list ({
            id: video.id.videoId,
            part: 'snippet,statistics',
        })
        
        const videoItem = videoResponse.data.items[0];
        const statistics = videoItem.statistics;

       return {
                title: videoItem.snippet.title,
                publishedAt: videoItem.snippet.publishedAt,
                description: videoItem.snippet.description,
                videoId: videoItem.id,
                channelId: videoItem.snippet.channelId,
                channelTitle: videoItem.snippet.channelTitle,
                likes: statistics.likeCount,
                dislikes: statistics.dislikeCount,
                views: statistics.viewCount,
                videoURL: `https://www.youtube.com/watch?v=${videoId}`,
                thumbnail: videoItem.snippet.thumbnails.high.url,
            }
        })
        const videoData = await Promise.all(videoPromises)
            return videoData;
    } catch (error) {
        console.error('Error fetching Videos:', error);
    }
    fetchVideos();
}

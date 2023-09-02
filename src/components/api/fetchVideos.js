const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const fetchVideos = async (maxResults = 20) => {
    try {
        const response = await fetch(
    `${API_URL}/search?key=${API_KEY}&part=snippet&type=video&order=date
    &maxResults=${maxResults}`
        );
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const videoItems = data.items
    
    const videos = await Promise.all(
        videos.map(async (video) => {
        const videoId = video.id.videoId;
        const VideoDetails = await fetchVideoDetails(videoId);

            return {
                videoId: videoId,
                videoTitle: video.snippet.title,
                videoThumbnail: video.snippet.thumbnails.high.url,
                videoDescription: video.snippet.description,
                videoChannelTitle: video.snippet.channelTitle,
                videoPublishedAt: video.snippet.publishedAt,
                videoDuration: videoDetails.items[0].contentDetails.duration,
                videoChannelId: videoDetails.items[0].snippet.channelId,
                videoChannelUrl: videoDetails.items[0].snippet.channelUrl,
                videoURL: `https://www.youtube.com/watch?v=${videoId}&autoplay=1&mute=1&controls=0&showinfo=0`,
                numLikes: videoDetails.items[0].statistics.likeCount,
                numDislikes: videoDetails.items[0].statistics.dislikeCount,
                numViews: videoDetails.items[0].statistics.viewCount
            }
        })
        );

    return videos;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

const fetchVideoDetails = async (videoId) => {
    try {
        const response = await fetch(
        `${API_URL}/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
            return data;
    } catch (error) {
        console.error('Error fetching video details:', error);
        return {};
    }
        };


module.exports = {
    fetchVideos,
    fetchVideoDetails
}

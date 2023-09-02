const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const API_URL = `https://www.googleapis.com/youtube/v3`;

// fetch comments about a specific video

const fetchComments = async (id = "", maxResults = 8) => {
    try {
     const response = await fetch(`${API_URL}/commentThreads?part=snippet&videoId=${id}&key=${API_KEY}&textFormat=plaintext&maxResults=${maxResults}`);
     if (!response.ok)
         throw new Error(`status ${response.status}`);
    
    const data = await response.json();
    const comments = data.items.map((item) => ({
    author: 
    item.snippet.topLevelComment.snippet.authorDisplayName,
    commentText:
    item.snippet.topLevelComment.snippet.textDisplay,
    id: 
    item.snippet.videoId,
    publishedAt: 
    item.snippet.topLevelComment.snippet.publishedAt
 }))
    return comments
} catch (error) {
    console.error("Error fetching comments", error);
    return [];
}

module.exports = { fetchComments };
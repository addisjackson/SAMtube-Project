const API_KEY = "AIzaSyCBs_heVzSHY-mpHWjaTfb0FTFakRAH_7o";
const API_URL = "https://www.googleapis.com/youtube/v3";

/**
 * Build a URL for searching YouTube videos
 * @param {number} maxResults 
 * @param {string} query 
 * @param {string} pageToken 
 * @returns {string} full URL
 */
export function getSnippetURL(maxResults = 50, query = "", pageToken = "") {
  const params = new URLSearchParams({
    part: "snippet",
    type: "video",
    maxResults,
    q: query,
    key: API_KEY,
    videoEmbeddable: "any",
    order: "relevance",
  });

  // Only add pageToken if it's non-empty
  if (pageToken) {
    params.set("pageToken", pageToken);
  }

  return `${API_URL}/search?${params.toString()}`;
}

/**
 * Fetch statistics for a single video by ID
 * @param {string} id 
 * @returns {object|null} video object
 */
export async function getStatistics(id) {
  if (!id) return null;

  try {
    const params = new URLSearchParams({
      part: "snippet,contentDetails,statistics",
      id,
      key: API_KEY,
    });

    const res = await fetch(`${API_URL}/videos?${params.toString()}`);
    if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
    const data = await res.json();
    return data.items?.[0] || null;
  } catch (err) {
    console.error("getStatistics failed:", err);
    return null;
  }
}

/**
 * Fetch video snippets (search)
 * @param {number} maxResults
 * @param {string} query
 * @param {string} pageToken
 * @returns {Array} Array of video snippet items
 */
export async function fetchSnippet(maxResults = 50, query = "", pageToken = "") {
  try {
    const url = getSnippetURL(maxResults, query, pageToken);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error("fetchSnippet failed:", err);
    return [];
  }
}

/**
 * Fetch a single video by ID
 * @param {string} videoId
 * @returns {object|null} video object
 */
export async function getVideoById(videoId) {
  if (!videoId) return null;

  try {
    const params = new URLSearchParams({
      part: "snippet,contentDetails,statistics",
      id: videoId,
      key: API_KEY,
      player: "embedHtml",
    });

    const res = await fetch(`${API_URL}/videos?${params.toString()}`);
    if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
    const data = await res.json();
    return data.items?.[0] || null;
  } catch (err) {
    console.error("getVideoById error:", err);
    return null;
  }
}

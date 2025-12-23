/**
 * Normalizes YouTube API responses so the app
 * always works with a consistent video shape.
 *
 * Works for:
 * - search endpoint (item.id.videoId)
 * - videos endpoint (item.id)
 */
export function normalizeVideo(item) {
  if (!item) return null;

  const id =
    typeof item.id === "string"
      ? item.id
      : item.id?.videoId || null;

  if (!id || !item.snippet) return null;

  return {
    id,
    snippet: item.snippet,
    contentDetails: item.contentDetails || null,
    statistics: item.statistics || null,
  };
}

import { useParams } from "react-router-dom";
import VideoIndex from "./VideoIndex";
import useInfiniteVideos  from "./useInfiniteVideos";
import useInfiniteScroll from "./useInfiniteScroll";

export default function CategoryPage() {
  const { term } = useParams();
  const query = term === "home" ? "" : decodeURIComponent(term);

  const {
    videos,
    loading,
    hasMore,
    fetchMoreVideos,
  } = useInfiniteVideos(query);

  const lastVideoRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: fetchMoreVideos,
  });

  return (
    <VideoIndex
      videos={videos}
      lastVideoRef={lastVideoRef}
      loading={loading}
    />
  );
}

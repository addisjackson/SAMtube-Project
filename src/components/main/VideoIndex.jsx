import VideoPlayerList from "./VideoPlayerList";

export default function VideoIndex({ videos, loading, lastVideoRef }) {
  return (
    <div className="video-grid">
      {videos.map((video, index) => {
        const isLast = index === videos.length - 1;

        return (
          <div
            ref={isLast ? lastVideoRef : null}
            key={video.id.videoId}
            className="video-card-wrapper"
          >
            <VideoPlayerList video={video} />
          </div>
        );
      })}

      {loading && <p>Loading more videos...</p>}
    </div>
  );
}

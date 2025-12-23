import { useRef, useCallback } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

export default function useInfiniteScroll({
  loading,
  hasMore,
  onLoadMore,
}) {
  const observer = useRef();

  const lastVideoRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, onLoadMore]
  );

  return lastVideoRef;
}

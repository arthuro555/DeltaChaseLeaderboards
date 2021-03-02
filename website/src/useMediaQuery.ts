import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [queryResult, setQueryResult] = useState(matchMedia(query).matches);
  useEffect(() => {
    const queryList = matchMedia(query);
    const callback: (e: MediaQueryListEvent) => void = ({ matches }) =>
      setQueryResult(matches);
    queryList.addEventListener("change", callback);
    return () => queryList.removeEventListener("change", callback);
  }, [query]);
  return queryResult;
};

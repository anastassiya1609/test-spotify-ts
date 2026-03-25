import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import type { Track } from "../types";
import TrackItem from "../components/track/TrackItem";
import { secondsConverter } from "../utils/utils";

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTracks() {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/search?q=" + searchParams.get("q"));
        setTracks(res.data.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTracks();
  }, [searchParams]);

  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Результаты поиска</h1>
      <div className="search-list">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          tracks.map((track, i) => (
            <TrackItem
              key={i}
              title={track.title}
              number={i + 1}
              artist={track.artist.name}
              duration={secondsConverter(track.duration)}
              img = {track.album.cover_small}
              isExtended = {true}
            />
          ))
        )}
      </div>
    </div>
  );
}

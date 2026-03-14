import { useEffect, useState } from "react";
import type { Artist, ArtistResponse } from "../types";
import Loader from "./Loader";
import Error from "./Error";
import ArtistItem from "./ArtistItem";

export default function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getArtists() {
      try {
        setIsLoading(true);

        const res = await fetch("/api//chart/0/artists");
        const data: ArtistResponse = await res.json();

        setArtists(data.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getArtists();
  }, []);

  return (
    <div className="album-wrapper">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="album-grid">
          {artists.map((artist) => (
            <ArtistItem
              key={artist.id}
              name={artist.name}
              poster={artist.picture}
            />
          ))}
        </div>
      )}
    </div>
  );
}

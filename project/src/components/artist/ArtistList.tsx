import { useEffect, useState } from "react";
import type { Artist, ArtistResponse } from "../../types";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import ArtistItem from "./ArtistItem";
import axios  from 'axios';

export default function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getArtists() {
      try {
        setIsLoading(true);

        const res: ArtistResponse = await axios.get("/api//chart/0/artists");
        

        setArtists(res.data.data);
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

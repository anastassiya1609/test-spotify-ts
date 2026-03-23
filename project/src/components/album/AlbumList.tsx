import { useEffect, useState } from "react";
import AlbumItem from "./AlbumItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import type { Album } from "../../types";
import type { AlbumResponse } from "../../types";
import  axios  from 'axios';


export default function AlbumList() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getAlbums() {
      try {
        setIsLoading(true);

        const res:AlbumResponse = await axios.get("/api/search/album?q=rock");
         
        setAlbums(res.data.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getAlbums();
  }, []);

  return (
    <div className="album-wrapper">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="album-grid">
          {albums.map((album) => (
            <AlbumItem
              key={album.id}
              title={album.title}
              artist={album.artist.name}
              poster={album.cover_medium}
              id={album.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

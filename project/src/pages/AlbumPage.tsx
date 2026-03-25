import { useParams } from "react-router-dom";
import { MdNumbers } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import type { AlbumDetails, Track } from "../types";
import TrackItem from "../components/track/TrackItem";
import { secondsConverter } from "../utils/utils";

export default function AlbumPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [albumData, setAlbumData] = useState<AlbumDetails | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    async function getAlbumData() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/album/${id}`);
        const data  = await res.json();
        setAlbumData(data);
        setTracks(data.tracks.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getAlbumData();
  }, [id]);

  return (
    <div className="wrapper">
      <div className="album-wrapper">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          albumData && (
            <>
              <div className="album-header">
                <img
                  src={albumData.cover_big}
                  alt={albumData.title}
                  className="album-img"
                />

                <div className="album-content">
                  <p className="album-content__type">Альбом</p>
                  <h1 className="album-content__name"> {albumData.title}</h1>
                  <div className="album-content__author">
                    <span>{albumData.artist.name} </span>
                    <div className="album-content__circle"></div>
                    <div className="album-content__type">
                      {" "}
                      {albumData.release_date.substring(0, 4)}
                    </div>

                    <div className="album-content__circle"></div>
                    <p> треков, 42 мин. 31 сек.</p>
                  </div>
                </div>
              </div>
              <div className="track-table">
                <div className="track-table__header">
                  <div className="track-header__text">
                    <MdNumbers />
                  </div>
                  <div className="track-header__text">Название</div>
                  <div className="track-header__text">
                    <FaRegClock />
                  </div>
                </div>
                <div className="track-table__body">
                  {tracks.map((track, i) => (
                    <TrackItem
                      key={track.id}
                      title={track.title}
                      number={i + 1}
                      artist={track.artist.name}
                      duration={secondsConverter(track.duration)}
                      
                    />
                  ))}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

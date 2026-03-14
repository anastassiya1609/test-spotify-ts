import type { AlbumItemProps } from "../types";
import { Link } from "react-router-dom";

export default function AlbumItem({ poster, title, artist }: AlbumItemProps) {
  return (
    <Link to={"/"} className="album-item">
      <img src={poster} alt={title} className="album-poster" />
      <h4 className="album-title">{title}</h4>
      <p className="album-artist">{artist}</p>
    </Link>
  );
}

import type { AlbumItemProps } from "../../types";
import { Link } from "react-router-dom";
import { ALBUM_PAGE_ROUTE } from "../../utils/consts";

export default function AlbumItem({ poster, title, artist, id }: AlbumItemProps) {
  return (
    <Link to={ALBUM_PAGE_ROUTE.replace(":id", id)} className="album-item">
      <img src={poster} alt={title} className="album-poster" />
      <h4 className="album-title">{title}</h4>
      <p className="album-artist">{artist}</p>
    </Link>
  );
}

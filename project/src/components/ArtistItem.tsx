import type { ArtistItemProps } from "../types";

export default function ArtistItem({ poster, name }: ArtistItemProps) {
  return (
    <div className="artist-item">
      <img src={poster} alt={name} className="artist-poste" />
      <h4 className="artist-name">{name}</h4>
    </div>
  );
}

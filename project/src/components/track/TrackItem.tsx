import type {   TrackItemProps } from "../../types";

export default function TrackItem({number, title, artist,duration} : TrackItemProps) {
    return (
         <div className="track-line">
      <div className="track-number">{number}</div>
      <div className="track-song">
        <h6 className="track-song__name">{title}</h6>
        <p className="track-song__author">{artist}</p>
      </div>
      <div className="track-duration">{duration}</div>
    </div>
    )
}
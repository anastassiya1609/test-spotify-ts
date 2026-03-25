import type { TrackItemProps } from "../../types";
import classNames from 'classnames';

export default function TrackItem({number, title, artist,duration, img, isExtended = false} : TrackItemProps) {
    return (
       <div className= {classNames("track-line", {"track-line__extended": isExtended})}>
      <div className="track-number">{number}</div>
      {isExtended && (
        <div className="track-poster">
          <img src={img} alt="Poster" />
        </div>
      )}
      <div className="track-song">
        <h6 className="track-song__name">{title}</h6>
        <p className="track-song__author">{artist}</p>
      </div>
      <div className="track-duration">{duration}</div>
    </div>
    )
}
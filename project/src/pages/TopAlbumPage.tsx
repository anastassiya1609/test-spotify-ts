import AlbumList from "../components/album/AlbumList";

export default function TopAlbumPage() {
    return(
        <div className="wrapper">
              <h1 className="wrapper-title">Популярные альбомы</h1>
        
             <AlbumList/>
            </div>
    )
}
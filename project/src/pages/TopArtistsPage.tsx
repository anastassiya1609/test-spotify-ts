import ArtistList from "../components/artist/ArtistList";

export default function TopArtistsPage(){
    return(
        <div className="wrapper">
                      <h1 className="wrapper-title">Популярные  исполнители</h1>
                
                     <ArtistList/>
                    </div>
    )
}
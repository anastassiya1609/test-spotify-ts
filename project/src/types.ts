export interface Album{
  id: number;
  title: string;
  cover_medium: string;
  artist: {
    name: string;
  };
};
export interface Artist{
  id: number;
  name: string;
  picture: string;
};



export interface AlbumItemProps {
  poster: string;
  title: string;
  artist: string;
}
export interface ArtistItemProps {
  poster: string;
  name: string;
}


 

export interface AlbumResponse {
  data: Album[];
};
export interface ArtistResponse {
  data: Artist[];
};
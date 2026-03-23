export interface Album {
  id: number;
  title: string;
  cover_medium: string;
  artist: {
    name: string;
  };
}
export interface AlbumResponse {
  data: {
    data: Album[];
  }
}
export interface Artist {
  id: number;
  name: string;
  picture: string;
}

export interface AlbumDetails {
  title: string;
  cover_big: string;
  artist: {
    name: string;
  };
  release_date: string;
}

export interface Track {
  key: number;
  id: number;
  title: string;
  artist: {
    name: string;
  };
  duration: number;
   
}

export interface AlbumItemProps {
  poster: string;
  title: string;
  artist: string;
  id: number;
}
export interface ArtistItemProps {
  poster: string;
  name: string;
}
export interface TrackItemProps{
    number: number;
    title: string;
    artist: string;
    duration: string;
}

 
export interface ArtistResponse {
  data:{
    data: Artist[];
  };
}

export interface LayoutProps {
  children: React.ReactNode;
}
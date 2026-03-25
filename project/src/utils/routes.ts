import TopAlbumPage from "../pages/TopAlbumPage";
import SettingsPage from "../pages/SettingsPage";
import TopArtistsPage from "../pages/TopArtistsPage";
import Error from "../components/shared/Error";
import AlbumPage from "../pages/AlbumPage";
import {
  ALBUM_PAGE_ROUTE,
  SEARCH_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  TOP_ALBUMS_PAGE_ROUTE,
  TOP_ATRTISTS_PAGE_ROUTE,
} from "../utils/consts";
import SearchPage from "../pages/SearchPage";

interface Routes {
  path: string;
  element: unknown;
}

export const routes: Routes[] = [
  {
    path: TOP_ALBUMS_PAGE_ROUTE,
    element: TopAlbumPage,
  },
  {
    path: TOP_ATRTISTS_PAGE_ROUTE,
    element: TopArtistsPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: ALBUM_PAGE_ROUTE,
    element: AlbumPage,
  },
  {
    path: SEARCH_PAGE_ROUTE,
    element: SearchPage,
  },
  {
    path: "*",
    element: Error,
  },
];

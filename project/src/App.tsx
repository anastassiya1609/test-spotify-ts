import "./assets/css/style.css";
import TopAlbumPage from "./pages/TopAlbumPage";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import TopArtistsPage from "./pages/TopArtistsPage";
import Error from "./components/Error";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<TopAlbumPage />} />
          <Route path="/artists" element={<TopArtistsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

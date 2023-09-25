import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Genres from "./components/Genres";
import Home from "./components/Home";
import Settings from "./components/Settings";
import ErrorPage from "./components/ErrorPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="artists" element={<Artists />} />
          <Route path="genres" element={<Genres />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

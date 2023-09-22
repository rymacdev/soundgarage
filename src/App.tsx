import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Genres from "./components/Genres";
import Home from "./components/Home";
import Settings from "./components/Settings";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Albums" element={<Albums />} />
          <Route path="Artists" element={<Artists />} />
          <Route path="Genres" element={<Genres />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

import Layout from "./components/shared/Layout";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Genres from "./components/Genres";
import Home from "./components/Home";
import Settings from "./components/Settings";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="artists" element={<Artists />} />
          <Route path="genres" element={<Genres />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  )
}

export default App;



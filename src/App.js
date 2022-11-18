import React from "react";
import { Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Info from "./components/Info/Info";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { useTranslation } from "react-i18next";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const { t } = useTranslation();
  const [storedValue, setValue] = UseLocalStorage("language", "en");

  console.log(storedValue)

  return (
    <div className="app">
      {}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

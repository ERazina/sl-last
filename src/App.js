import React from "react";
import { Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Info from "./components/Info/Info";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { useTranslation } from "react-i18next";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const { t } = useTranslation();
  const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
    // <Router>
    //   <Routes>
    //     {/* <div className="App"> */}
    //     {/* <Header /> */}

    //     <Route path="/" element={<App />}>
    //       <Route index element={<Home />} />
    //       <Route path="galley" element={<Gallery />} />
    //       <Route path="about" element={<About />} />
    //       {/* <Route path="info" element={<Info />} /> */}
    //     </Route>
    //     {/* </div> */}
    //   </Routes>
    // </Router>
  );
}

export default App;

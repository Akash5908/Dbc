import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Preloader, About, Home, Info, Tour, Image, Videoplayer, Holiday, NewsLetter, Footer, Whatsapp, ClientArea } from "./component";
import Blob from "./component/blob/Blob";

const App = () => {
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloader(false);
    }, 2500);
  });
  return (
    <div>
      {isPreloader ? (
        <Preloader />
      ) : (
        <div>

          <Router basename="/">
            <Whatsapp />
            <Navbar />
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="About" component={About} />
              <Route exact path="Info" component={Info} />
              <Route exact path="Tour" component={Tour} />
            </Routes>
          </Router>
          <Image />
          <Videoplayer />
          <Holiday />
          <Blob />
          <ClientArea />
          <NewsLetter />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;

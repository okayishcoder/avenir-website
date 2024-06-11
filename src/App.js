import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/header";
import Home from "./components/home";
import Aboutus from "./components/aboutus";

import "./App.css";
import RoomCarousel from "./components/roomcarousel/roomcarousel";

function App() {
  return (
    <div>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <Home />
        <Aboutus />
        <RoomCarousel />
      </main>
    </div>
  );
}

export default App;

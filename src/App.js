import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/header";
import Home from "./components/home";
import Aboutus from "./components/aboutus";

import "./App.css";
import RoomCarousel from "./components/roomcarousel/roomcarousel";
import Services from "./components/services/services";
import Blogs from "./components/blogs/blogs";
import ContactUs from "./components/contactus/contactus";

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
        <Services />
        <Blogs />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;

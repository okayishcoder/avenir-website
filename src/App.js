import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/header";
import Home from "./components/home";
import About from "./components/about";

import "./App.css";

function App() {
  return (
    <div>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;

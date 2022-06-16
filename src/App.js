import "./App.css";
import About from "./Components/About";
import Client from "./Components/Client";
import Hero from "./Components/Hero";
import NavigationBar from "./Components/NavigationBar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="App">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Client />
      </div>
    </div>
  );
}

export default App;

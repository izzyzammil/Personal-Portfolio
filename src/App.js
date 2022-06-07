import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import NavigationBar from "./Components/NavigationBar";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="App">
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;

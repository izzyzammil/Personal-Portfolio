import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="App">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;

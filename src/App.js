import "./App.css";
import About from "./Components/About";
import Client from "./Components/Client";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

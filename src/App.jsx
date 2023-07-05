import About from "./components/About";
import Hero from "./components/Hero";
import Master from "./components/Master";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Third from "./components/Third";

//
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Third />
      <About />
      <Master />
      <Portfolio />
    </>
  );
}

export default App;

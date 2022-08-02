import "./App.css";
import AboutUs from "./Components/AboutUs";
import AllInOne from "./Components/AllInOne";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Support from "./Components/Support";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUs />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;

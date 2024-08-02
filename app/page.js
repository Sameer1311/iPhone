import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlite from "./components/Highlite";
import Model from "./components/Model";
import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";
export default function Home() {
  return (
<main className="overflow-y-auto overflow-hidden">
    <Navbar/>
    <Hero/>
    <Highlite/>
    <Model/>
    <About/>
    <About2/>
    <Footer/>
</main>
  );
}

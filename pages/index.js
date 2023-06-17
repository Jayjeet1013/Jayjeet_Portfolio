import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";



export default function Home() {
  return (
   <div>

    <HomePage />
    <Portfolio />
    <Experience/>
    <Me/>
    <Contact/>
    <Footer/>
   </div>
  );
}

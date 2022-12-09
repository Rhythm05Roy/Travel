import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/ganga.jpg"
import Footer from "../components/Footer";
import TripStyle from "../components/TripStyle";
function Service(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid"
        heroImg ={aboutImg}
        title ="Service"
        btn="hide"
        />
        <TripStyle/>
        <Footer/>
        </>
    )
   }
   export default Service;
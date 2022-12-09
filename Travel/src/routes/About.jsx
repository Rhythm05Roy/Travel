import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/rajasthan.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid"
        heroImg ={aboutImg}
        title ="About"
        btn="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
   }
   export default About;
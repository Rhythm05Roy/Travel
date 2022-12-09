import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TripStyle from "../components/TripStyle";
import img1 from '../assets/goa.jpg'

function Home(){
 return(
    <>
    <Navbar/>
    <Hero cName="hero"
    heroImg ={img1}
    title ="Your Journey Your Story"
    text ="Choose Your Favourite Destination"
    url = ""
    btnText="Travel Plan"
    btn="show"
    />
    <Destination/>
    <TripStyle/>
    <Footer/>
    </>
 )
}
export default Home;
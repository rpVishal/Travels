import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutImg from "../assests/night.jpg";
import Footer from "../Footer";
import AboutUs from "../AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="What We Are"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;

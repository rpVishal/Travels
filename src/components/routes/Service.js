import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutImg from "../assests/img.jpg";
import Footer from "../Footer";
import Trip from "../Trip";
import Servicedata from "../Servicestrip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        url="/"
        btnClass="hide"
      />
      <Servicedata />
      <Footer />
    </>
  );
}
export default Service;

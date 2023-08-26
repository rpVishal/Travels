import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutImg from "../assests/2.jpg";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact Us"
        url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;

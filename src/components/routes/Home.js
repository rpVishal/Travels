import Navbar from "../Navbar";
import Hero from "../Hero";
import Img1 from "../assests/home.jpg";
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Img1}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;

import maldives1 from "./assests/1.jpg";
import maldives2 from "./assests/m2.jpg";
import dubai3 from "./assests/m3.jpg";
import dubai4 from "./assests/m4.jpg";
import malaysia1 from "./assests/n1.jpg";
import malaysia2 from "./assests/n2.jpg";
import "./Destination.css";
import Destinationdata from "./Destinationdata";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Most Visited and Popular Destinations</h1>
      <p>A trip gives you an tremendous joy within a frame :)</p>
      <Destinationdata
        className="first-des "
        heading="Maldives, South Asia"
        text="The Maldives, an Indian Ocean paradise, is a collection of coral islands known for its turquoise waters, white-sand beaches, and vibrant marine life. With its capital Malé, the country relies heavily on tourism for its economy, offering luxury resorts and water-based activities."
        img1={maldives1}
        img2={maldives2}
      />
      <Destinationdata
        className="first-des-reverse "
        heading="Dubai, United Arab Emirates"
        text="Dubai, a vibrant city in the United Arab Emirates (UAE), is renowned for its modern architecture, luxury shopping, and cultural diversity. With iconic structures like the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, a man-made island, Dubai is a global hub for innovation and extravagance. It offers a blend of traditional markets, known as souks, and high-end malls."
        img1={dubai3}
        img2={dubai4}
      />

      <Destinationdata
        className="first-des "
        heading="Malaysia, Asia"
        text="Malaysia, situated in Southeast Asia, is a diverse and culturally rich country with a unique blend of Malay, Chinese, Indian, and indigenous influences. It offers a mix of bustling cities, lush rainforests, and stunning beaches. Kuala Lumpur, the capital, boasts the iconic Petronas Twin Towers and a vibrant urban scene."
        img1={malaysia1}
        img2={malaysia2}
      />
    </div>
  );
};
export default Destination;

import "./trip.css";
import TripData from "./TripData";
import aust1 from "./assests/aust1.jpg";
import south1 from "./assests/south1.jpg";
import london1 from "./assests/london1.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Discover Unique Destination</p>
      <div className="tripcard">
        <TripData
          image={aust1}
          heading="Trip To Australia"
          text="Australia, officially known as the Commonwealth of Australia, is a vast and diverse country located in the southern hemisphere. It is the sixth-largest country in the world by total area, encompassing the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands."
        />

        <TripData
          image={south1}
          heading="Trip To South-Africa"
          text="South Africa, located at the southern tip of the African continent, is a country known for its rich history, cultural diversity, and natural beauty. "
        />

        <TripData
          image={london1}
          heading="Trip To London"
          text="London, the capital city of the United Kingdom, is a vibrant and historic metropolis with a global influence. London welcomes millions of tourists annually who come to experience its landmarks, museums, shopping districts, and diverse neighborhoods."
        />
      </div>
    </div>
  );
}
export default Trip;

import "./trip.css";
import Servicestripdata from "./Servicestripdata";
import jet1 from "./assests/jet1.jpg";
import sky1 from "./assests/sky1.jpg";
import scuba1 from "./assests/scuba1.jpg";

function Servicedata() {
  return (
    <div className="trip">
      <h1>Activities</h1>
      <p>Discover Adventurous Activities</p>
      <div className="tripcard">
        <Servicestripdata
          image={jet1}
          heading="Jet Ski"
          text="A jet ski ride offers an exhilarating experience on the water, combining speed, maneuverability, and the thrill of riding waves.A jet ski ride is a popular recreational activity that involves riding a small personal watercraft, often referred to as a jet ski or personal watercraft (PWC)."
        />

        <Servicestripdata
          image={sky1}
          heading="Skydiving"
          text="Skydiving is an adrenaline-pumping adventure sport that involves jumping from an aircraft at high altitudes and experiencing a thrilling free fall before deploying a parachute to safely land on the ground."
        />

        <Servicestripdata
          image={scuba1}
          heading="Scuba Diving"
          text="Scuba diving is an underwater adventure activity that allows individuals to explore the captivating world beneath the surface of the sea. Scuba diving is an exhilarating recreational and exploratory activity that enables people to venture into underwater realms with the help of specialized equipment. "
        />
      </div>
    </div>
  );
}
export default Servicedata;

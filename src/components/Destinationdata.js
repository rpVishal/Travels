import { Component } from "react";
import "./Destination.css";
import maldives1 from "./assests/1.jpg";
import maldives2 from "./assests/m2.jpg";

class Destinationdata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="image" src={this.props.img1} />
          <img alt="image" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default Destinationdata;

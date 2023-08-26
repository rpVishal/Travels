import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travels</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>All Right Reserved</h4>
        </div>
      </div>
    </div>
  );
};
export default Footer;

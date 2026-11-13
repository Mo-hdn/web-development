import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h1>Charcoal, bread and plates meant to be shared</h1>

      <p>Order from our grill and get it delivered fresh to your door.</p>

      <div className="home-buttons">
        <Link to="/menu" className="btn">Order now</Link>
      </div>

      <h2>How ordering works</h2>
      <div className="grid">
        <div className="feature">
          <h3>Pick your dishes</h3>
          <p>Search the menu or filter by category.</p>
        </div>
        <div className="feature">
          <h3>Check out in a minute</h3>
          <p>Review your cart, add your address and place the order.</p>
        </div>
        <div className="feature">
          <h3>Enjoy your meal</h3>
          <p>We cook your order fresh and bring it to your door.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
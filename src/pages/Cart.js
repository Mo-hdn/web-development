import { Link } from "react-router-dom";

const Cart = ({ cart, onRemove }) => {
  // total cost = sum of (price × quantity) for every cart line
  let total = 0;
  for (const c of cart) {
    total += c.price * c.quantity;
  }

  return (
    <div className="page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/menu">Go to the menu</Link>
        </p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((c) => (
              <li key={c.id} className="cart-item">
                <div className="cart-info">
                  <strong>{c.name}</strong>
                  <span>
                    {c.quantity} × {c.price.toFixed(2)} $
                  </span>
                </div>

                <span className="line-total">
                  {(c.price * c.quantity).toFixed(2)} $
                </span>

                <button onClick={() => onRemove(c.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <h2 className="cart-total">Total: {total.toFixed(2)} $</h2>

          <Link to="/menu" className="btn btn-outline">
            ← Back to menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
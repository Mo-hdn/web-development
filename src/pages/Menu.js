import { Link } from "react-router-dom";
import items from "../components/items";

const Menu = ({ cart, onAdd, onDecrease }) => {
  // total number of pieces in the cart (for the link at the bottom)
  let totalCount = 0;
  for (const c of cart) {
    totalCount += c.quantity;
  }

  return (
    <div className="page">
      <h1>Our Menu</h1>

      <div className="menu-list">
        {items.map((item) => {
          // how many of this item are in the cart? (0 if none)
          const inCart = cart.filter((c) => c.id === item.id);
          const quantity = inCart.length > 0 ? inCart[0].quantity : 0;

          return (
            <div key={item.id} className="menu-row">
              <div className="menu-text">
                <h3>{item.name}</h3>
                {item.description && (
                  <p className="menu-desc" dir="auto">
                    {item.description}
                  </p>
                )}
                <p className="menu-price">{item.price.toFixed(2)} $</p>
              </div>

              <div className="qty-controls">
                <button onClick={() => onDecrease(item.id)} disabled={quantity === 0}>
                  −
                </button>
                <span className="qty">{quantity}</span>
                <button onClick={() => onAdd(item)}>+</button>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/cart" className="btn btn-primary">
  🛒 Go to cart
  <span className="badge">{totalCount}</span>
</Link>
    </div>
  );
};

export default Menu;
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // each cart entry looks like: { id, name, description, price, quantity }
  const [cart, setCart] = useState([]);

  function addItem(item) {
    const existing = cart.filter((c) => c.id === item.id);

    if (existing.length > 0) {
      // already in the cart: increase its quantity by 1
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      // first time: add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function decreaseItem(id) {
    // lower the quantity by 1, then drop any entry that reached 0
    setCart(
      cart
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c))
        .filter((c) => c.quantity > 0)
    );
  }

  function removeItem(id) {
    // remove the whole line, whatever its quantity
    setCart(cart.filter((c) => c.id !== id));
  }

  return (
    <BrowserRouter>
      <div className="layout">
        <SideBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={
                <Menu cart={cart} onAdd={addItem} onDecrease={decreaseItem} />
              }
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} onRemove={removeItem} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
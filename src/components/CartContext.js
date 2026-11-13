import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  function addToCart(dish, qty) {
    const newCart = [...cart];
    let found = false;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === dish.id) {
        newCart[i] = { ...newCart[i], qty: newCart[i].qty + qty };
        found = true;
      }
    }
    if (found === false) {
      newCart.push({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: qty });
    }
    setCart(newCart);
  }

  function changeQty(id, change) {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + change } : item
    );
    setCart(updated.filter((item) => item.qty > 0));
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function getCount() {
    let count = 0;
    for (let i = 0; i < cart.length; i++) count = count + cart[i].qty;
    return count;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) total = total + cart[i].price * cart[i].qty;
    return total;
  }

  function placeOrder(customer) {
    const id = "A" + (orders.length + 101);
    const newOrder = { id: id, items: cart, total: getTotal(), customer: customer, placed: Date.now() };
    const newOrders = [...orders];
    newOrders.push(newOrder);
    setOrders(newOrders);
    setCart([]);
    return id;
  }

  const value = { cart, orders, addToCart, changeQty, removeFromCart, getCount, getTotal, placeOrder };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
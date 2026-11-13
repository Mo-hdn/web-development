import React from "react";
import ReactDOM from "react-dom/client";
import "./style/home.css";
import App from "./App";
import { CartProvider } from "./components/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

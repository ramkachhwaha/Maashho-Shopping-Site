import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"; // Notification ke liye

export let cartContent = createContext();

export default function MainContext({ children }) {
  // --- Cart Logic ---
  let [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );

  // --- Theme Logic (Dark/Light) ---
  let [theme, setTheme] = useState(
    localStorage.getItem("THEME") ? localStorage.getItem("THEME") : "light"
  );

  // Cart Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);

  // Theme Save & Apply
  useEffect(() => {
    localStorage.setItem("THEME", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // --- Functions ---
  
  // Add to Cart (Smart Logic)
  let addToCart = (product) => {
    let exist = cart.find((item) => item.id === product.id);
    if (exist) {
      // Agar pehle se hai, to quantity badhao
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
      toast.info("Quantity updated in cart!");
    } else {
      // Naya item add karo
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Added to Cart!");
    }
  };

  // Remove from Cart
  let removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Item removed!");
  };

  // Update Quantity
  let updateQty = (id, type) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
            if(type === 'plus') return { ...item, qty: item.qty + 1 }
            if(type === 'minus' && item.qty > 1) return { ...item, qty: item.qty - 1 }
        }
        return item;
      })
    );
  };

  let toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let obj = { cart, addToCart, removeFromCart, updateQty, theme, toggleTheme, cartCount: cart.length };

  return <cartContent.Provider value={obj}>{children}</cartContent.Provider>;
}
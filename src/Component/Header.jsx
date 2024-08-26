import React, { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CardDetails from "./CardDetails";
import { ThemeContext, movieContext } from "../context";

export default function Header() {
  const [showCard, setShowCard] = useState(false);
  const { cartData } = useContext(movieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);


  function handleCartOpen() {
    setShowCard(true);
  }

  function handleCartClose() {
    setShowCard(false);
  }
  return (
    <>
      {showCard && <CardDetails handleCartClose={handleCartClose} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt="moon"
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleCartOpen}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={shoppingCart}
                  width="24"
                  height="24"
                  alt="shoppingCart"
                />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

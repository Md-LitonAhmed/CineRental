import React from "react";
import { useContext } from "react";
import { movieContext } from "../context";
import { getImgUrl } from "../utilies/cine-utilies";
import Cart from "./Cart";

export default function CardDetails({ handleCardClose }) {
  const { cartData, setCartData } = useContext(movieContext);

  return (
    <>
      {cartData.map((movie) => (
        <Cart key={movie.id} handleCardClose={handleCardClose} movie={movie} />
      ))}
    </>
  );
}

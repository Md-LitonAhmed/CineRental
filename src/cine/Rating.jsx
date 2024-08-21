import React from "react";
import Star from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((item, index) => (
        <img key={index} src={item} width="14" height="14" alt="Star" />
      ))}
    </>
  );
}

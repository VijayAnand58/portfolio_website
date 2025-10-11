"use client"; // if using Next.js app directory

import React from "react";
import { TypeAnimation } from "react-type-animation";

// Define the props type
interface TypeComponentProps {
  values: (string | number)[];
  repeat_val: number;
}

const TypeComponent: React.FC<TypeComponentProps> = ({ values, repeat_val }) => {
  return (
    <TypeAnimation
      sequence={values}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={repeat_val}
    />
  );
};

export default TypeComponent;

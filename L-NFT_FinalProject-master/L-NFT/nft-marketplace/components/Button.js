import React from "react";
import "../styles/globals.css"

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-wildwm rounded-[10px] outline-none ${styles}`}>
    Join Us
  </button>
);

export default Button;
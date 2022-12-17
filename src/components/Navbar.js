/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react";
import airbnb_icon from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnb_icon} className="nav--icon" alt="airbnb-icon" />
    </nav>
  );
}

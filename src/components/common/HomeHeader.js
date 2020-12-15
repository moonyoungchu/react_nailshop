import React from "react";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div class="homeheader">
      
      <Link to="/" class="logo">HOME</Link>
    </div>
  );
}

export default HomeHeader;

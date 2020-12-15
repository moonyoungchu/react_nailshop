import React from "react";
import { Link } from "react-router-dom";

function MenuBar({ isAuthorized, isAdmin }) {
  return (

    <header class="menubar">
    <nav>
            {isAuthorized && !isAdmin && (
              <>
              <ul>
                <li><Link to="/">HOME</Link></li>
              
                <li><Link to="/item">NAIL</Link></li>
                <li><Link to="/coin/pay">BUYING LIST</Link></li>

                <li><Link to="/coin/create">COIN</Link></li>
                <li><Link to="/coin/charge">COIN HISTORY</Link></li>
                
                <li><Link to="/board">Q&A</Link></li>
                </ul>
                
              </>
            )}
            {!isAuthorized && (
              <>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/item">NAIL</Link></li>            
                <li><Link to="/board">Q&A</Link></li>
              </ul>
              </>
            )}
    </nav>
  </header>
  );
}

export default MenuBar;

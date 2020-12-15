
import React from "react";
import { Link } from "react-router-dom";

function MainHeader({ myInfo, isAuthorized, onLogout }) {
    return (
      <div class="mainheader">

        <h1 class="logo">
        BEAUTIFUL NAIL SHOP
        </h1>

        <span></span>

        <span class="loginhi">
        {isAuthorized && myInfo && (
          <>
            <span class="hi">{myInfo.userName}님 환영합니다! </span>
            <button class="button" onClick={onLogout}>Logout</button>
          </>
        )}
        {!isAuthorized && !myInfo && <Link to="/signin">Log in</Link>}
        </span>

      </div>
    );
  }

export default MainHeader;

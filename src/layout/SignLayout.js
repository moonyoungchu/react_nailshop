import React from "react";
import HomeHeader from "../components/common/HomeHeader";
import Footer from "../components/common/Footer";

function SignLayout({ children }) {
  return (
    <div align="center">
      <HomeHeader />
      {children}
      <Footer />
    </div>
  );
}

export default SignLayout;

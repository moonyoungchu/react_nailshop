import React from "react";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";
import MenuBarContainer from "../containers/common/MenuBarContainer";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div align="center">
      <MainHeaderContainer />
      <MenuBarContainer />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;

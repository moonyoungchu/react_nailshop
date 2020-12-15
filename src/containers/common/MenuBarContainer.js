import React from "react";
import { connect } from "react-redux";
import MenuBar from "../../components/common/MenuBar";
import { getAuthorized, isAdmin } from "../../modules/selector";

const MenuBarContainer = ({ isAuthorized, isAdmin }) => {
  return (
    <MenuBar
      isAuthorized={isAuthorized}
      isAdmin={isAdmin}
    />
  );
};

export default connect((state) => {
  return {
    isAuthorized: getAuthorized(state),
    isAdmin: isAdmin(state),
  };
})(MenuBarContainer);

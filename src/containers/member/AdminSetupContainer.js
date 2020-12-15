import React from "react";
import AdminSetupForm from "../../components/member/AdminSetupForm";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const AdminSetupContainer = ({ history }) => {
  const onRegister = async (userId, userName, userPw) => {
    try {
      await api.adminSetup(userId, userName, userPw);

      alert("등록이 완료되었습니다.");

      history.push("/");
    } catch (e) {
      alert(e.response.data);
    }
  };

  return <AdminSetupForm onRegister={onRegister} />;
};

export default withRouter(AdminSetupContainer);

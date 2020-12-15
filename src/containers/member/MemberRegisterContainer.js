import React from "react";
import MemberRegisterForm from "../../components/member/MemberRegisterForm";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const MemberRegisterContainer = ({ history }) => {
  const onRegister = async (userId, userName, userPw, job) => {
    try {
      const response = await api.writeMember(userId, userName, userPw, job);

      alert("등록이 완료되었습니다.");

      history.push("/member/read/" + response.data.userNo);
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <MemberRegisterForm onRegister={onRegister} />;
};

export default withRouter(MemberRegisterContainer);

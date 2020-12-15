import React from "react";
import SignUpForm from "../../components/auth/SignUpForm";
import { signUp } from "../../lib/api";
import { withRouter } from "react-router-dom";

const SignUpContainer = ({ history }) => {
  const onSignUp = async (userId, userName, password, job) => {
    try {
      await signUp(userId, userName, password, job);

      alert("회원가입이 완료되었습니다.");

      history.push("/signin");
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <SignUpForm onSignUp={onSignUp} />;
};

export default withRouter(SignUpContainer);

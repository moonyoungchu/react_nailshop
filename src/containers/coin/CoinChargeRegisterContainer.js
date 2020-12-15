import React from "react";
import CoinChargeRegisterForm from "../../components/coin/CoinChargeRegisterForm";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const CoinChargeRegisterContainer = ({ history }) => {
  const onRegister = async (amount) => {
    try {
      const response = await api.chargeCoin(amount);

      alert(response.data);

      history.push("/coin/charge");
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

  return <CoinChargeRegisterForm onRegister={onRegister} />;
};

export default withRouter(CoinChargeRegisterContainer);

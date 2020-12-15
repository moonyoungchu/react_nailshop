import React from "react";
import BoardRegisterForm from "../../components/board/BoardRegisterForm";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const BoardRegisterContainer = ({ history }) => {
  const onRegister = async (title, content) => {
    try {
      const response = await api.writeBoard(title, content);

      alert("등록이 완료되었습니다.");

      history.push("/board/read/" + response.data.boardNo);
    } catch (e) {
      if (e.response.status === 400) {
        alert("로그인이 필요합니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <BoardRegisterForm onRegister={onRegister} />;
};

export default withRouter(BoardRegisterContainer);

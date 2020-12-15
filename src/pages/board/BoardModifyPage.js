import React from "react";
import BoardModifyContainer from "../../containers/board/BoardModifyContainer";
import MainLayout from "../../layout/MainLayout";

function BoardModifyPage({ match }) {
  const { boardNo } = match.params;

  return (
    <MainLayout>
      <BoardModifyContainer boardNo={boardNo} />
    </MainLayout>
  );
}

export default BoardModifyPage;

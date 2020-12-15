import React from "react";
import { Link } from "react-router-dom";

function BoardList({ boards, isLoading , isAdmin}) {
  return (
    <div class="table">
      <h2>게시판 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && boards && (
        <>
          <Link to="/board/create" class="new">글쓰기</Link>
          <table>
            <thead>
              <tr>
                <th align="center" width="320">제목</th>
                <th align="center" width="100">작성자</th>
                <th align="center" width="150">등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!boards.length && (
                <tr>
                  <td colSpan="4">
                    List is empty.
                  </td>
                </tr>
              )}
              {!!boards.length && boards.map((board) => (
                <tr key={board.boardNo}>

                  <td align="left">
                    <Link to={`/board/read/${board.boardNo}`}>
                      {board.title}
                    </Link>
                  </td>
                  <td align="right">{board.writer}</td>
                  <td align="center">{board.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default BoardList;

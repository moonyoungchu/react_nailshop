import React from "react";
import { Link } from "react-router-dom";

function BoardRead({ 
  board, 
  isLoading, 
  boardNo, 
  onRemove, 
  myInfo 
}) {
  let isOwn = false;
  if(myInfo && board) {
    if(myInfo.userId === board.writer) {
      isOwn = true;
    }
  }

  return (
    <div align="center" class="read">
      <h2>게시판 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && board && (
        <>
          <table>
            <tbody>
              <tr>
              </tr>
              <tr>
                <td class="front">등록일시</td>
                <td>
                  <input type="text" value={board.regDate} readOnly/>
                </td>
              </tr>
              <tr>
                <td class="front">제목</td>
                <td>
                  <input type="text" value={board.title} readOnly />
                </td>
              </tr>
              <tr>
                <td class="front">작성자</td>
                <td>
                  <input type="text" value={board.writer} readOnly />
                </td>
              </tr>
              <tr>
                <td class="front">내용</td>
                <td>
                  <textarea value={board.content} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          {isOwn && (
            <>
              <Link to={`/board/edit/${boardNo}`}>편집</Link>
              <button class="button" onClick={onRemove}>삭제</button>
            </>
          )}
          <Link to="/board">목록</Link>
        </>
      )}
    </div>
  );
}

export default BoardRead;

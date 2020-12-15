import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function BoardRegisterForm({ onRegister }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onRegister(title, content);
    },
    [title, content, onRegister]
  );

  return (
    <div align="center" class="read">
      <h2>게시판 등록</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td class="front">제목</td>
              <td>
                <input type="text" value={title} onChange={handleChangeTitle} />
              </td>
            </tr>
            <tr>
              <td class="front">내용</td>
              <td>
                <textarea
                  rows="5"
                  value={content}
                  onChange={handleChangeContent}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button type="submit" class="button">등록</button>
          <Link to="/board">취소</Link>
        </div>
      </form>
    </div>
  );
}

export default BoardRegisterForm;

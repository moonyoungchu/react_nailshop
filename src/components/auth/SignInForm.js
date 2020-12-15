import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function SignInForm({ onSignIn }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserId = useCallback((e) => {
    setUserId(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onSignIn(userId, password);
    },
    [userId, password, onSignIn]
  );

  return (
    <div class="login">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td class="front">아이디</td>
              <td>
                <input type="text" value={userId} onChange={handleChangeUserId} />
              </td>
            </tr>
            <tr>
              <td class="front">비밀번호</td>
              <td>
                <input type="password" value={password} onChange={handleChangePassword} />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="under">
          <button type="submit" class="new">로그인</button>

          <div><Link to="/signup">회원가입</Link></div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;

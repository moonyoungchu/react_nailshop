import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchJobCodeList } from "../../lib/api";

function SignUpForm({ onSignUp }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [job, setJob] = useState("00");
  const [jobCodes, setJobCodes] = useState([]);

  const handleChangeUserId = useCallback((e) => {
    setUserId(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleChangeUserName = useCallback((e) => {
    setUserName(e.target.value);
  }, []);

  const handleChangeJob = useCallback((e) => {
    setJob(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onSignUp(userId, userName, password, job);
    },
    [userId, userName, password, job, onSignUp]
  );

  const getJobCodeList = async () => {
    try {
      const response = await fetchJobCodeList();
      setJobCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getJobCodeList();
  }, []);

  return (
    <div class="login">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td class="front">아이디</td>
              <td>
                <input
                  type="text"
                  value={userId}
                  onChange={handleChangeUserId}
                />
              </td>
            </tr>
            <tr>
              <td class="front">비밀번호</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </td>
            </tr>
            <tr>
              <td class="front">사용자명</td>
              <td>
                <input
                  type="text" 
                  value={userName}
                  onChange={handleChangeUserName}
                />
              </td>
            </tr>
            </tbody>
        </table>
            {/* <tr>
              <td class="front">직업</td>
              <td>
                <select onChange={handleChangeJob} value={job}>
                  {jobCodes.map((jobCode) => (
                    <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                  ))}
                </select>
              </td>
            </tr> */}


          <div class="under">
            <button type="submit" class="new">회원가입</button>
            <div><Link to="/signin">로그인</Link></div>
          </div>
        </form>
    </div>
  );
}

export default SignUpForm;

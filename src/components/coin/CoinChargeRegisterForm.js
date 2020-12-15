import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function CoinChargeRegisterForm({ onRegister }) {
  const [amount, setAmount] = useState("");

  const handleChangeAmount = useCallback((e) => {
    setAmount(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onRegister(amount);
    },
    [amount, onRegister]
  );

  return (
    <div align="center" class="coin">
      <h2>코인 충전</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td class="front">충전금액</td>
              <td>
                <input type="text" value={amount} onChange={handleChangeAmount} />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="under">
          <button type="submit" class="button">충전하기</button>
          <Link to="/coin/charge">충전내역</Link>
        </div>
      </form>
    </div>
  );
}

export default CoinChargeRegisterForm;

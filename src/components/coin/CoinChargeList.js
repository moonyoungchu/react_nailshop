import React from "react";

function CoinChargeList({ chargeCoins, isLoading }) {
  return (
    <div class="table">
      <h2>충전 내역</h2>
      {isLoading && "로딩중..."}
      {!isLoading && chargeCoins && (
        <>
          <table>
            <thead>
              <tr>
                <th align="center" width="80">번호</th>
                <th align="center" width="320">충전금액</th>
                <th align="center" width="180">등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!chargeCoins.length && (
                <tr>
                  <td colSpan="3">
                    List is empty.
                  </td>
                </tr>
              )}
              {!!chargeCoins.length && chargeCoins.map((chargeCoin) => (
                <tr key={chargeCoin.historyNo}>
                  <td align="center">{chargeCoin.historyNo}</td>
                  <td align="left">{chargeCoin.amount}</td>
                  <td align="center">{chargeCoin.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CoinChargeList;

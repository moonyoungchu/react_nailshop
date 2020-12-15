import React from "react";

function CoinPayList({ payCoins, isLoading }) {
  return (
    <div class="table">
      <h2>구매 내역</h2>
      {isLoading && "로딩중..."}
      {!isLoading && payCoins && (
        <>
          <table>
            <thead>
              <tr>
                <th align="center" width="80">번호</th>
                <th align="center" width="120">공개자료명</th>
                <th align="center" width="120">구매금액</th>
                <th align="center" width="180">등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!payCoins.length && (
                <tr>
                  <td colSpan="4">
                    List is empty.
                  </td>
                </tr>
              )}
              {!!payCoins.length && payCoins.map((payCoin) => (
                <tr key={payCoin.historyNo}>
                  <td align="center">{payCoin.historyNo}</td>
                  <td align="left">{payCoin.itemName}</td>
                  <td align="left">{payCoin.amount}</td>
                  <td align="center">{payCoin.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CoinPayList;

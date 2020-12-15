import React from "react";
import { Link } from "react-router-dom";

function ItemRead({ 
  item, 
  isLoading, 
  itemId, 
  onRemove,
  isAdmin,
  onBuy
}) {

  return (
    <div align="center" class="read">
      <h2>상품 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && item && (
        <>
          <table>
            <tbody>
              <tr>
                <td class="front">상품번호</td>
                <td>
                  <input type="text" value={item.itemId} readOnly />
                </td>
              </tr>
              <tr>
                <td class="front">상품명</td>
                <td>
                  <input type="text" value={item.itemName} readOnly />
                </td>
              </tr>
              <tr>
                <td class="front">상품가격</td>
                <td>
                  <input type="text" value={item.price} readOnly />
                </td>
              </tr>
              <tr>
                <td class="front">상품설명</td>
                <td>
                  <textarea value={item.description} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          {isAdmin && (
            <>
              <Link to={`/item/edit/${itemId}`}>편집</Link>
              <button class="button" onClick={onRemove}>삭제</button>
            </>
          )}
          {!isAdmin && 
            <button  class="button" onClick={onBuy}>구매</button>
          }
          <Link to="/item">목록</Link>
        </>
      )}
    </div>
  );
}

export default ItemRead;

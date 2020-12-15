import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items, isLoading, isAdmin }) {
  return (
    <div class="table">
      <h2>상품 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && items && (
        <>
          {isAdmin && (
            <Link to="/item/create">새로만들기</Link>
          )}
          <table>
            <thead>
              <tr>
                <th align="center" width="100">상품ID</th>
                <th align="center" width="320">상품명</th>
                <th align="center" width="100">상품 가격</th>
              </tr>
            </thead>
            <tbody>
              {!items.length && (
                <tr>
                  <td colSpan="3">
                    List is empty.
                  </td>
                </tr>
              )}
              {!!items.length && items.map((item) => (

                <tr key={item.itemId}>

                  <td align="center">{item.itemId}</td>

                  <td align="left">
                    <Link to={`/item/read/${item.itemId}`}>
                      {item.itemName}
                    </Link>
                  </td>

                  <td align="right">{item.price}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

        <section class="gallery">
          <div class="gallery__item1">
            <p class="gallery__text">Tatan nail</p>
          </div>
          <div class="gallery__item2">
            <p class="gallery__text">Heymish nail</p>
          </div>
          <div class="gallery__item3">
            <p class="gallery__text">Shiraz nail</p>
          </div>
          <div class="gallery__item4">
            <p class="gallery__text">Ohdri nail</p>
          </div>
          <div class="gallery__item5">
            <p class="gallery__text">Copal nail</p>
          </div>
          <div class="gallery__item6">
            <p class="gallery__text">Ruminus nail</p>
          </div>
          <div class="gallery__item7">
            <p class="gallery__text">Checklist nail</p>
          </div>
          <div class="gallery__item8">
            <p class="gallery__text">Marble ston nail</p>
          </div>
          <div class="gallery__item9">
            <p class="gallery__text">Pluffy nail</p>
          </div>
          <div class="gallery__item10">
            <p class="gallery__text">Sunday nail</p>
          </div>
        </section>



    </div>
  );
}

export default ItemList;

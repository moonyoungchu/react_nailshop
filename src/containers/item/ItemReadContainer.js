import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemRead from "../../components/item/ItemRead";
import { fetchOne, FETCH_ONE } from "../../modules/item";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";
import { isAdmin as hasRoleAdmin } from "../../modules/selector";

const ItemReadContainer = ({ itemId, history }) => {
  const dispatch = useDispatch();

  const { item, isLoading, isAdmin } = useSelector((state) => ({
    item: state.item.item,
    isLoading: state.loading[FETCH_ONE],
    isAdmin: hasRoleAdmin(state),
  }));

  useEffect(() => {
    dispatch(fetchOne(itemId));
  }, [dispatch, itemId]);

  const onRemove = async () => {
    try {
      await api.removeItem(itemId);

      alert("삭제가 완료되었습니다.");

      history.push("/item");
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else {
        alert(e.response.data.message);
      }
    }
  };

  const onBuy = async () => {
    try {
      const response = await api.buyItem(itemId);

      alert(response.data);
    } catch (e) {
      if (e.response.status === 400) {
        alert("로그인이 필요합니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return (
    <ItemRead
      item={item}
      isLoading={isLoading}
      itemId={itemId}
      onRemove={onRemove}
      isAdmin={isAdmin}
      onBuy={onBuy}
    />
  );
};

export default withRouter(ItemReadContainer);

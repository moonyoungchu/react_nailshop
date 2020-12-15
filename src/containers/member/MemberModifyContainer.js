import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import MemberModifyForm from "../../components/member/MemberModifyForm";
import * as api from "../../lib/api";
import { fetchOne, FETCH_ONE } from "../../modules/member";

const MemberModifyContainer = ({ userNo, history }) => {
  const dispatch = useDispatch();

  const { member, isLoading } = useSelector(({ member, loading }) => ({
    member: member.member,
    isLoading: loading[FETCH_ONE],
  }));

  const onModify = async (userNo, payload) => {
    try {
      await api.modifyMember(userNo, payload);

      alert("수정이 완료되었습니다.");

      history.push("/member/read/" + userNo);
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else {
        alert(e.response.data.message);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchOne(userNo));
  }, [dispatch, userNo]);

  return (
    <MemberModifyForm
      member={member}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default withRouter(MemberModifyContainer);

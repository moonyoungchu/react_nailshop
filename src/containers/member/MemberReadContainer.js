import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberRead from "../../components/member/MemberRead";
import { fetchOne, FETCH_ONE } from "../../modules/member";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const MemberReadContainer = ({ userNo, history }) => {
  const dispatch = useDispatch();

  const { member, isLoading } = useSelector(({ member, loading }) => ({
    member: member.member,
    isLoading: loading[FETCH_ONE],
  }));

  useEffect(() => {
    dispatch(fetchOne(userNo));
  }, [dispatch, userNo]);

  const onRemove = async () => {
    try {
      await api.removeMember(userNo);

      alert("삭제가 완료되었습니다.");

      history.push("/member");
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

  return (
    <MemberRead
      member={member}
      isLoading={isLoading}
      userNo={userNo}
      onRemove={onRemove}
    />
  );
};

export default withRouter(MemberReadContainer);

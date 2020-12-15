import { createSelector } from "reselect";

const getAccessToken = (state) => state.auth.accessToken;
const getMyInfo = (state) => state.auth.myInfo;

export const getAuthorized = createSelector(
  [getAccessToken, getMyInfo],
  (accessToken, myInfo) => accessToken.length > 0 && !!myInfo
);

export const isAdmin = createSelector(
  [getAuthorized, getMyInfo],
  (isAuthorized, myInfo) =>
    isAuthorized && myInfo.authList[0].auth === "ROLE_ADMIN"
);

export const isMember = createSelector(
  [getAuthorized, getMyInfo],
  (isAuthorized, myInfo) =>
    isAuthorized && myInfo.authList[0].auth === "ROLE_MEMBER"
);

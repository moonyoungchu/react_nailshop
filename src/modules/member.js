import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

export const FETCH_ONE = "member/FETCH_ONE";
const FETCH_ONE_SUCCESS = "member/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "member/FETCH_ONE_FAILURE";

export const FETCH_LIST = "member/FETCH_LIST";
const FETCH_LIST_SUCCESS = "member/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "member/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (userNo) => userNo);
export const fetchList = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchMember);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchMemberList);

export function* memberSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

const initialState = {
  member: null,
  members: [],
  error: null,
};

const member = handleActions(
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      member: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      member: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      members: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      members: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default member;

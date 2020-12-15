import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../lib/api";
import client from "../lib/client";
import Cookies from "js-cookie";

const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";
const LOGIN = "auth/LOGIN";

const SET_MY_INFO = "auth/SET_MY_INFO";
const CHECK_MY_INFO = "auth/CHECK_MY_INFO";

export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken) => accessToken);
export const login = createAction(LOGIN, ({ userId, password }) => ({ userId, password }));

export const setMyInfo = createAction(SET_MY_INFO, (myInfo) => myInfo);
export const checkMyInfo = createAction(CHECK_MY_INFO);

function* loginSaga(action) {
  try {
    const { userId, password } = action.payload;

    const response = yield call(api.signIn, userId, password);

    const { authorization } = response.headers;
    const accessToken = authorization.substring(7);
    
    yield put(setAccessToken(accessToken));

    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    Cookies.set("accessToken", accessToken, { expires: 1 });
  } catch (e) {
    console.log(e);
  }
}

function* checkMyInfoSaga() {
  try {
    const response = yield call(api.getMyInfo);
    
    yield put(setMyInfo(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(CHECK_MY_INFO, checkMyInfoSaga);
}

const initialState = {
  accessToken: "",
  myInfo: null,
};

const auth = handleActions(
  {
    [SET_ACCESS_TOKEN]: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
    [SET_MY_INFO]: (state, action) => ({
      ...state,
      myInfo: action.payload,
    }),
  },
  initialState
);

export default auth;

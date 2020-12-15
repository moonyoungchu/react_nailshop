import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";

import board, { boardSaga } from "./board";
import item, { itemSaga } from "./item";
import coin, { coinSaga } from "./coin";


const rootReducer = combineReducers({
  auth,
  loading,
  board,
  item,
  coin,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    boardSaga(),
    itemSaga(),
    coinSaga(),
  ]);
}

export default rootReducer;

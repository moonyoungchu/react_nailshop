import React from 'react';
import { Route } from "react-router-dom";
import './scss/App.scss';

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

import BoardListPage from "./pages/board/BoardListPage";
import BoardRegisterPage from "./pages/board/BoardRegisterPage";
import BoardModifyPage from "./pages/board/BoardModifyPage";
import BoardReadPage from "./pages/board/BoardReadPage";

import ItemListPage from "./pages/item/ItemListPage";
import ItemReadPage from "./pages/item/ItemReadPage";

import CoinChargeListPage from "./pages/coin/CoinChargeListPage";
import CoinChargeRegisterPage from "./pages/coin/CoinChargeRegisterPage";
import CoinPayListPage from "./pages/coin/CoinPayListPage";


function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
      <Route component={SignUpPage} path="/signup" exact />

      <Route component={BoardListPage} path="/board" exact />
      <Route component={BoardRegisterPage} path="/board/create" />
      <Route component={BoardModifyPage} path="/board/edit/:boardNo" />
      <Route component={BoardReadPage} path="/board/read/:boardNo" />

      <Route component={ItemListPage} path="/item" exact />
      <Route component={ItemReadPage} path="/item/read/:itemId" />
      
      <Route component={CoinChargeListPage} path="/coin/charge" />
      <Route component={CoinChargeRegisterPage} path="/coin/create" />
      <Route component={CoinPayListPage} path="/coin/pay" />

    </>
  );
}

export default App;

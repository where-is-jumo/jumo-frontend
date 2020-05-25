import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import RootStore from "../stores";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const stores = new RootStore();
    return (
      <Provider {...stores}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
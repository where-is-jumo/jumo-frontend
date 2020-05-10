import App, { Container } from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import RootStore from "../stores";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const root = new RootStore();
    return (
      <Provider {...root}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}
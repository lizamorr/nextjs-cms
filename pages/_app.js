import App from "next/app";
import React from "react";
import Header from "../components/Header";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

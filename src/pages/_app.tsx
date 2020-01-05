import App from "next/app";
import React from "react";
import Router from "next/router";

// Global Styles
import "../styles.scss";

// Global Components
import { MetaTags } from "../components";
import { trackPageView } from "../core/gtag";
import { defaultMetaTags, defaultMenuItems } from "../core/constants";

// App Components
// import Header from '../containers/Header';
// import Footer from '../containers/Footer';

Router.events.on("routeChangeComplete", url => trackPageView(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <MetaTags tags={defaultMetaTags} />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

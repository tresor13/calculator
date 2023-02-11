import { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

import React, { FC } from "react";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <title>Calculator</title>
      </Head>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;

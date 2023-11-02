import React from "react";
import type { AppProps } from "next/app";

import "../src/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
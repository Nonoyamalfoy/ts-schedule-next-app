import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "../assets/theme";
import "../assets/styles/vendors/style.css";
import { Provider } from "react-redux";
import createStore from "../reducks/store/store";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Header } from "../components/Header";
import { Loading } from "../components/Uikit";

export const store = createStore();

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Loading>
              <Header />
              <Component {...pageProps} />
            </Loading>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </Provider>
    </>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

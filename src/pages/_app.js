// import { Provider } from "react-redux";

// export const store = createStore();
export default function App({ Component, pageProps }) {

  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>
  );
}

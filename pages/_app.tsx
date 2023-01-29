import "../styles/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

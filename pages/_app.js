import "../styles/styles.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

      <meta http-equiv="x-ua-compatible" />
      <title>Viberate</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      />
      <link rel="stylesheet" href="./styles/styles.css" />
      <link rel="stylesheet" href="./styles/basic.css" />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

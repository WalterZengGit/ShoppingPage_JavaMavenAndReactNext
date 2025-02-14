import "../styles/globals.css"; // ✅ 這裡才可以載入 Global CSS

export default function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
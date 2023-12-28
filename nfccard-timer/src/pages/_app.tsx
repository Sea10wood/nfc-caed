import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/bubble.css"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

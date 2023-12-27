import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <style jsx global>{`
          #__next {
            height: 100;
            width: 100;
          }
        `}</style>
      </body>
    </Html>
  );
}

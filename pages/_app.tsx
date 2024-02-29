import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const abc = localFont({
  src: "../public/fonts/ABCDiatype-Regular.woff2",
  variable: "--font-abc",
});
const abcItalic = localFont({
  src: "../public/fonts/ABCDiatype-RegularItalic.woff2",
  variable: "--font-abc-italic",
});
const newEdge = localFont({
  src: "../public/fonts/NewEdgeSoftPower4-LightRounded.woff2",
  variable: "--font-new-edge",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${abc.variable} ${abcItalic.variable} ${newEdge.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}

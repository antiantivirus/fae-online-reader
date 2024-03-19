import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import TOC from "@/components/toc";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={["light", "red", "dark"]}
      enableColorScheme
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

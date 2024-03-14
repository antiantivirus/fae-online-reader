import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import TOC from "@/components/toc";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={["light", "red", "dark"]} enableColorScheme>
      <Header />
      <TOC />
      <main className="ml-11 mr-2.5 mt-20 lg:mx-0">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

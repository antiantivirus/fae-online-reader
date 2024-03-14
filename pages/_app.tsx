import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import GlyphBackground from "@/components/glyphBackground";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      themes={["light", "red", "dark"]}
      defaultTheme="light"
      enableColorScheme
    >
      {/* <Header /> */}
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

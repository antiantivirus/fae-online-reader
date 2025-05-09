import "@/styles/globals.css";
// import "@/styles/pdf.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPdfPage = router.pathname === '/briefing/fae5/pdf';

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("ONSXGREG", {
      includedDomains: ["reader.futureartecosystems.org"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (router.pathname.includes("fae5")) {
      htmlElement.classList.add("fae5");
    } else {
      htmlElement.classList.remove("fae5");
    }
  }, [router.pathname])
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={["light", "red", "dark"]}
      enableColorScheme
    >
      <Head>
        <title>Future Art Ecosystems</title>
      </Head>
      {/* temp fix for search! */}
      {/* {(router.pathname != "/briefing/fae4" && router.pathname != "/briefing/fae5") && <Header />} */}
      <Component {...pageProps} />
      <SpeedInsights />
      <Script
        defer
        src="/stats/script.js"
        data-website-id="2dec2f47-4195-42c4-b7d6-6abce8db0dc7"
      />
    </ThemeProvider>
  );
}
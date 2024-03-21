import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="bg-background">
      <Head>
        <title>Future Art Ecosystems 4: Art x Public AI</title>
        <meta
          name="description"
          content="Future Art Ecosystems 4: Art x Public AI provides analyses, concepts and strategies for responding to the transformations of AI systems on culture and society."
        />
        <meta
          property="og:description"
          content="Future Art Ecosystems 4: Art x Public AI provides analyses, concepts and strategies for responding to the transformations of AI systems on culture and society."
        />

        <meta property="og:image" content="/social-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <Script
          defer
          src="/stats/script.js"
          data-website-id="2dec2f47-4195-42c4-b7d6-6abce8db0dc7"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

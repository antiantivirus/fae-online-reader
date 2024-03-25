import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-background">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

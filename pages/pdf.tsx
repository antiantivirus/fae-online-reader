import fs, { readdirSync } from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Svg,
} from "@react-pdf/renderer";
import Html from "react-pdf-html";
import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import { saveAs } from "file-saver";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Box from "@/components/box";
import { renderToString } from "react-dom/server";
import { extractFrames } from "@/utils";
import Plus from "@/components/icons/plus";

// Default export is a4 paper, portrait, using millimeters for units
// const doc = new jsPDF();

// doc.addFont("NewEdge.ttf", "New Edge", "normal");
// doc.setFont("New Edge", "normal");

// doc.text("Hello world!", 10, 10);
// doc.save("a4.pdf");

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

// const regularFont = `${process.env.NEXT_PUBLIC_APP_URL}/fonts/NewEdge.ttf`;

// Create styles
Font.register({
  family: "New-Edge",
  src: "/fonts/NewEdge.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});

// stop wordbreak
Font.registerHyphenationCallback((word) => {
  return [word];
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 14,
    color: "#421629",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  chapterNo: {
    margin: 12,
    fontSize: 120,
    marginBottom: 20,
    color: "#421629",
  },
  h1: {
    margin: 12,
    fontSize: 36,
    marginBottom: 40,
    color: "#421629",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#421629",
  },
});

const stylesheet = {
  p: {
    margin: 12,
    fontSize: 14,
    color: "#421629",
    // fontFamily: "New-Edge",
  },
  li: {
    margin: 12,
    fontSize: 8,
    color: "#421629",
  },
  a: {
    verticalAlign: 10,
    fontSize: 10,
    color: "#421629",
    textDecoration: "none",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  chapterNo: {
    margin: 12,
    fontSize: 120,
    marginBottom: 20,
    color: "#421629",
  },
  h1: {
    margin: 12,
    fontSize: 36,
    marginBottom: 40,
    color: "#421629",
  },
  h2: {
    margin: 12,
    fontSize: 24,
    marginBottom: 20,
    color: "#421629",
  },
  h3: {
    margin: 12,
    fontSize: 20,
    marginBottom: 20,
    color: "#421629",
  },
  h4: {
    margin: 12,
    fontSize: 18,
    marginBottom: 20,
    color: "#421629",
  },
  blockquote: {
    fontStyle: "italic",
    marginLeft: 12,
  },
  cite: {
    fontSize: 14,
    color: "#421629",
  },
};

// Create Document Component

export default function PDF({
  chapters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const image = await extractFrames("/crosslucid_short.mp4", { count: 1 });
  const html = chapters.map((chapter) => {
    return {
      title: chapter.mdxSource.frontmatter.title as string,
      no: chapter.mdxSource.frontmatter.chapter_no as string,
      html: renderToString(
        <MDXRemote
          {...chapter.mdxSource}
          // specifying the custom MDX components
          components={{
            Box,
            // p: ({ children }) => <Text style={styles.text}>{children}</Text>,
            // h2: ({ children }) => (
            //   <>
            //     <Text style={styles.h2}>{children}</Text>
            //   </>
            // ),
            // h3: ({ children }) => <Text style={styles.h3}>{children}</Text>,
            // h4: ({ children }) => <Text style={styles.h4}>{children}</Text>,
            // h5: ({ children }) => <Text style={styles.h4}>{children}</Text>,
            // h6: ({ children }) => <Text style={styles.h4}>{children}</Text>,
            // sup: ({ children }) => <Text style={styles.sup}>{children}</Text>,
          }}
        />,
      ),
    };
  });

  return (
    <div>
      <PDFViewer className="ml-12 h-[80vh] w-11/12">
        <Document>
          <Page size={"A5"} style={styles.body}>
            {html.map((chapter) => {
              return (
                <>
                  <Text break></Text>
                  <Text style={styles.chapterNo}>{chapter.no}</Text>
                  <Text style={styles.h1}>{chapter.title}</Text>
                  <Text break></Text>
                  {/* <Image src={image} /> */}
                  <Html stylesheet={stylesheet}>{chapter.html}</Html>
                </>
              );
            })}
            <Text
              style={styles.pageNumber}
              render={({ pageNumber }) => `${pageNumber}`}
              fixed
            />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

// const Download = () => {
//   const handleDownload = async () => {
//     console.log("downloading pdf");
//     const blob = await pdf(<MyDocument />).toBlob();
//     console.log(blob);
//     saveAs(blob, "untitled.pdf");
//   };

//   return <button onClick={handleDownload}>Download</button>;
// };

// export default Download;

export async function getStaticProps() {
  const chapterFilePaths = [
    "defining-public-ai.mdx",
    "chapter-1.mdx",
    "chapter-2.mdx",
    "chapter-3.mdx",
  ];

  const chapters = await Promise.all(
    chapterFilePaths.map(async (filePath) => {
      const source = fs.readFileSync("content/fae4/" + filePath);
      const mdxSource = await serialize(source, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          format: "mdx",
        },
        parseFrontmatter: true,
      });

      return {
        mdxSource,
      };
    }),
  );

  return {
    props: {
      chapters,
    },
    // enable ISR
    revalidate: 60,
  };
}

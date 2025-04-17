import styles from './pdf.module.css'
import fs, { readdirSync } from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Footnote from "@/components/footnote";
import Box from "@/components/box";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ReactNode } from "react";
import Model from "@/components/model";
import Image, { ImageProps } from "next/image";
import TOC from "@/components/toc";
import Footer from "@/components/footer";
import Script from 'next/script'

export default function PostPage({
  chapters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="fae5">
      <Script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js" />
      <Head>
        <title>
          Future Art Ecosystems 5: R&D
        </title>
      </Head>
      <TOC />
      <main className="mb-10 ml-[3rem] mr-2.5 mt-20 lg:mx-0">
        <img src="/images/fae4-cover.svg" className='w-full' />
        <article
          id="chapter-contents"
          className={`prose space-y-[12.5px]`}
        >
          {chapters.map((chapter, index) => (
            <div className="chapter" key={index}>
              <h1>{chapter.frontmatter.title}</h1>
              <MDXRemote
                key={index}
                {...chapter}
                // specifying the custom MDX components
                components={{
                  Model,
                  Box,
                  Image,
                }}
              />
            </div>
          ))}
        </article>
      </main>
    </div >
  );
}

export async function getStaticProps() {

  // Retrieve all MDX files for FAE5
  const filenames = readdirSync("content/fae5/");

  // Use Promise.all to handle asynchronous file reading and serialization
  const chapters = await Promise.all(
    filenames.map(async (filename) => {
      const content = fs.readFileSync(`content/fae5/${filename}`, "utf-8");
      const mdxSource = await serialize(content, {
        mdxOptions: {
          rehypePlugins: [rehypeSlug],
          remarkPlugins: [remarkGfm],
          format: "mdx",
        },
        parseFrontmatter: true,
      });
      return mdxSource;
    })
  );

  return {
    props: {
      chapters,
    },
    // enable ISR
    revalidate: 60,
  };
}

type HeadingProps = {
  id?: string;
  children?: ReactNode;
};

const boxedHeading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = ({ id, children }: HeadingProps) => (
    <div className="!mt-[50px]">
      <Box wide>
        <Link href={`#${id}`} className="anchor group relative no-underline">
          <As id={id}>{children}</As>
        </Link>
      </Box>
    </div>
  );
  Heading.displayName = As;
  return Heading;
};

const heading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = ({ id, children }: HeadingProps) => (
    <Link href={`#${id}`} className="anchor group relative no-underline">
      <As id={id}>{children}</As>
    </Link>
  );
  Heading.displayName = As;
  return Heading;
};

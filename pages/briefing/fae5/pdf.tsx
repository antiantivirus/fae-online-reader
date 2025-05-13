import styles from './pdf.module.css'
import fs, { readdirSync } from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Footnote from "@/components/pdf/footnote";
import Box from "@/components/box";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ReactNode } from "react";
import Model from "@/components/model";
import Image, { ImageProps } from "next/image";
import TOC from "@/components/pdf/toc";
import Footer from "@/components/footer";
import Script from 'next/script';
import Diagram from '@/components/diagram';
import rehypeExtractHeadings from "@/utils/rehypeExtractHeadings"
import rehypeGlyphs from '@/utils/rehypeGlyphs';
import { useEffect, useState } from 'react';

export default function PostPage({
  chapters,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div className="font-slackLight">
      <Script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js" />
      <Head>
        <title>
          Future Art Ecosystems 5: R&D
        </title>
      </Head>

      <img src="/images/fae4-cover.svg" className='w-full' />
      <TableOfContents chapters={chapters} />
      <article
        id="chapter-contents"
        className={`prose space-y-[12.5px]`}
      >
        {chapters.map((chapter, index) => (
          <div className="chapter" key={index}>
            {chapterTitle(chapter.mdxSource)}
            <MDXRemote
              key={index}
              {...chapter.mdxSource}
              // specifying the custom MDX components
              components={{
                Model,
                Diagram,
                Image,
                Box: (props) => {
                  return <div {...props} />;
                },
                sup: (props) => <Footnote info={props.children} />,
              }}
            />
          </div>
        ))}
      </article>
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
      const headings: { id: string, title: string }[] = []
      const mdxSource = await serialize(content, {
        mdxOptions: {
          rehypePlugins: [rehypeSlug, [rehypeExtractHeadings, { rank: 2, headings }], rehypeGlyphs],
          remarkPlugins: [remarkGfm],
          format: "mdx",
        },
        parseFrontmatter: true,
      });
      return {
        mdxSource,
        headings
      }
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

const chapterTitle = (chapter: Chapter["mdxSource"]) => {
  if (chapter.frontmatter.chapter_no) {
    return <div id={chapter.frontmatter.title!.replace(" ", "-")} className="break-after-page">
      <span className="text-[20rem]">{chapter.frontmatter.chapter_no}</span>
      <h1>{chapter.frontmatter.title}</h1>
    </div>
  }
  return <h1 id={chapter.frontmatter.title!.replace(" ", "-")} className='text-center'>{chapter.frontmatter.title}</h1>
}

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


const TableOfContents = ({ chapters }: { chapters: Chapter[] }) => {
  const [tocWithPages, setTocWithPages] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {

      chapters.forEach((chapter) => {
        // Find the chapter element and add the page number
        const chapterElement = document.getElementById(chapter.mdxSource.frontmatter.title!.replace(" ", "-"));
        if (chapterElement) {
          const chapterPage = chapterElement?.closest('[data-page-number]')?.getAttribute('data-page-number') || 'N/A';
          const chapterLink = document.querySelector(`a[href="#${chapter.mdxSource.frontmatter.title!.replace(" ", "-")}"]`);
          const chapterLinkNumber = chapterLink?.querySelector('.page-number')
          if (chapterLinkNumber) {
            chapterLinkNumber.innerHTML = chapterPage
          }
        }

        // Find each heading and add the page number
        chapter.headings.forEach((heading) => {
          const element = document.getElementById(heading.id);
          if (element) {
            const page = element?.closest('[data-page-number]')?.getAttribute('data-page-number') || 'N/A';
            const headingLink = document.querySelector(`a[href="#${heading.id}"]`);
            const headingLinkNumber = headingLink?.querySelector('.page-number');

            if (headingLinkNumber) {
              headingLinkNumber.innerHTML = page;
            }
          }
        });
      });
    }, 2000)
  }, [chapters]);

  return (
    <nav className="toc break-before-page ml-12">
      <ul>
        {chapters.map((chapter, chapterIndex) => (
          <li key={chapterIndex}>
            <h3 className='mb-6'>
              <a className='flex gap-2' href={`#${chapter.mdxSource.frontmatter.title!.replace(" ", "-")}`}>
                <span>{chapter.mdxSource.frontmatter.title}</span>
                <span className='border-b border-primary grow mb-1.5'>
                </span>
                <span className='page-number'></span>
              </a>
            </h3>
            <ul className="ml-12 mb-6">
              {chapter.headings.map((heading, index) => (
                <li key={index}>
                  <a href={`#${heading.id}`} className='flex gap-2'>
                    <span>{heading.title}</span>
                    <span className='border-b border-primary grow mb-1.5'>
                    </span>
                    <span className='page-number'></span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav >
  );
};
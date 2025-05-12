import fs, { readdirSync } from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Footnote from "@/components/footnote";
import Box from "@/components/box";
import ChapterHeading from "@/components/FAE5/chapterHeading";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ReactNode } from "react";
import Model from "@/components/model";
import Diagram from "@/components/diagram";
import TOC from "@/components/toc";
import Footer from "@/components/footer";
import Image from "next/image";
import Background from "@/components/FAE5/background";
import LoadingSheen from "@/components/FAE5/loading";

export default function PostPage({
  source,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = source.frontmatter.title as string;
  return (
    <div data-pagefind-body data-pagefind-filter="tag:fae5" className="font-slackLight">
      <LoadingSheen />
      <Background />
      <Head>
        <title>
          {source.frontmatter.title as string} - Future Art Ecosystems 5: R&D
        </title>
      </Head>
      <TOC />
      <main className="mb-10 ml-[3rem] mr-2.5 mt-20 lg:mx-0 relative">
        <ChapterHeading
          key={source.frontmatter.title as string}
          no={source.frontmatter.chapter_no as string}
          title={title}
          image={source.frontmatter.image as string}
          credit={source.frontmatter.video_credit as string}
        />
        <article
          id="chapter-contents"
          className={`prose space-y-[12.5px] ${slug}`}
        >
          <MDXRemote
            {...source}
            // specifying the custom MDX components
            components={{
              Model,
              Box,
              h1: heading("h1"),
              h2: heading("h2"),
              h3: heading("h3"),
              h4: heading("h4"),
              h5: heading("h5"),
              h6: heading("h6"),
              sup: (props) => <Footnote info={props.children} />,
              Image,
              Diagram,
              // Don't include footnotes section in search
              section: (props) => {
                // @ts-expect-error Ignore TypeScript error for custom attribute
                if (props['data-footnotes']) {
                  return <section data-pagefind-ignore {...props} />; // Prevent rendering
                }
                return <section {...props} />;
              },
            }}
          />
        </article>
        {source.frontmatter.next_chapter! &&
          <div className="max-w-box mx-auto">
            <Link className="next-chapter ml-auto mr-0 block rounded bg-background p-3 shadow md:p-5 w-fit max-w-box mt-10" href={source.frontmatter.next_chapter}>
              Next Chapter
            </Link>
          </div>
        }
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = readdirSync("content/fae5")
    .filter((path) => path.endsWith(".mdx") || path.endsWith(".md")) // Only include .mdx or .md files
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>,
) {
  const { slug } = ctx.params!;

  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const chapterFile = fs.readFileSync(`content/fae5/${slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(chapterFile, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
    parseFrontmatter: true,
  });
  return {
    props: {
      source: mdxSource,
      slug: slug,
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

const footnotes = () => {
  return <div data-pagefind-ignore></div>;
};
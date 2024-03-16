import fs, { readdirSync } from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Footnote from "@/components/footnote";
import Box from "@/components/box";
import ChapterHeading from "@/components/chapterHeading";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ReactNode } from "react";

export default function PostPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = source.frontmatter.title as string;
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string}</title>
      </Head>
      <ChapterHeading
        no={source.frontmatter.chapter_no as string}
        title={title}
        video={source.frontmatter.video as string}
      />
      <article id="chapter-contents" className="prose space-y-[12.5px]">
        <MDXRemote
          {...source}
          // specifying the custom MDX components
          components={{
            Footnote,
            Box,
            h1: heading("h1"),
            h2: heading("h2"),
            h3: heading("h3"),
            h4: heading("h4"),
            h5: heading("h5"),
            h6: heading("h6"),
            sup: (props) => <Footnote info={props.children} />,
          }}
        />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = readdirSync("content/fae4")
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
  const chapterFile = fs.readFileSync(`content/fae4/${slug}.mdx`);

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

// const footnote = ({ children }) => {
//   <sup>{children}</sup>;
// };

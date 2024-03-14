import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Footnote from "@/components/footnote";
import Box from "@/components/box";
import ChapterHeading from "@/components/chapterHeading";
export default function PostPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string}</title>
      </Head>
      <ChapterHeading
        no={source.frontmatter.chapter_no as string}
        title={source.frontmatter.title as string}
        video={source.frontmatter.video as string}
      />
      <article id="chapter-contents" className="prose space-y-12">
        <MDXRemote
          {...source}
          // specifying the custom MDX components
          components={{
            Footnote,
            Box,
          }}
        />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
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
  const mdxSource = await serialize(chapterFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
    // enable ISR
    revalidate: 60,
  };
}

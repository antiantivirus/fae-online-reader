import fs, { readdirSync } from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Footnote from "@/components/footnote";
import Box from "@/components/box";
import ChapterHeading from "@/components/fae_five/chapterHeading";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ReactNode } from "react";
import Model from "@/components/model";
import Diagram from "@/components/diagram";
import TOC from "@/components/fae_five/toc";
import Footer from "@/components/footer";
import Image from "next/image";
import Background from "@/components/fae_five/background";
import rehypeGlyphs from "@/utils/rehypeGlyphs";
import Picture from "@/components/fae_five/picture";
import PDFOnly from '@/components/fae_five/pdfOnly';

export default function PostPage({
  source,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = source.frontmatter.title as string;
  return (
    <div data-pagefind-body data-pagefind-filter="tag:fae5" className="font-slackLight">
      <Background />
      <Head>
        <title>
          {source.frontmatter.title as string} - Future Art Ecosystems 5: Art x Creative R&D
        </title>
        {/* Google Scholar Metadata - formatted for better Zotero compatibility */}
        <meta name="citation_title" content="Future Art Ecosystems 5: Art x Creative R&D"/>
        <meta name="citation_authors" content="Victoria Ivanova; Kay Watson; Nick Houde; Tommie Introna"/>
        <meta name="citation_date" content="2025-06-13"/>
        <meta name="citation_year" content="2025"/>
        <meta name="citation_publication_date" content="2025-06-13"/>
        <meta name="citation_publisher" content="Serpentine Gallery"/>
        <meta name="citation_abstract" content="The evolving landscape of art and advanced technologies (AxAT) has witnessed significant transformation over the past decade, with Creative R&amp;D emerging as a distinct domain integrating artistic experimentation, technological innovation, and cross-sector collaborations. The fifth volume of the Future Art Ecosystems briefing series—Art x Creative R&amp;D (FAE5)—examines this critical nexus and offers concrete recommendations for its development and impact."/>
        <meta name="citation_keywords" content="art, advanced technologies, cultural policy, creative industries, cultural sector, R&D, innovation, research and development, artistic practice, technological innovation, digital art, media studies, cultural anthropology"/>
        <meta name="citation_public_url" content="https://reader.futureartecosystems.org/briefing/fae5/"/>
        <meta name="citation_fulltext_html_url" content="https://reader.futureartecosystems.org/briefing/fae5/"/>
        <meta name="citation_pdf_url" content="https://reader.futureartecosystems.org/briefing/fae5/fae5.pdf"/>
        <meta name="citation_language" content="en"/>

        {/* Dublin Core Metadata */}

        <meta name="DC.type" content="Book"/>
        <meta name="DC.title" content="Future Art Ecosystems 5: Art x Creative R&D"/>
        <meta name="DC.creator" content="Ivanova, Victoria;Watson, Kay;Houde, Nick;Introna, Tommie"/>
        <meta name="DC.subject" content="Art; Digital Art; Advanced Technologies; Cultural Policy; Creative Industries; R&D; Innovation; Social Aspects of Computing; Cultural Anthropology; Media Studies"/>
        <meta name="DC.description" content="The evolving landscape of art and advanced technologies (AxAT) has witnessed significant transformation over the past decade, with Creative R&amp;D emerging as a distinct domain integrating artistic experimentation, technological innovation, and cross-sector collaborations. The fifth volume of the Future Art Ecosystems briefing series—Art x Creative R&amp;D (FAE5)—examines this critical nexus and offers concrete recommendations for its development and impact."/>
        <meta name="DC.publisher" content="Serpentine Gallery"/>
        <meta name="DC.date" content="2025-06-13"/>
        <meta name="DC.type" content="Book"/>
        <meta name="DC.format" content="text/html"/>
        <meta name="DC.identifier" content="https://reader.futureartecosystems.org/briefing/fae5/"/>
        <meta name="DC.language" content="en"/>
        <meta name="DC.rights" content="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"/>
      </Head>
      <TOC />
      <main className="mb-10 ml-[3rem] mr-2.5 mt-20 lg:mx-0 relative">
        <ChapterHeading
          key={source.frontmatter.title as string}
          no={source.frontmatter.chapter_no as string}
          title={title}
          image={source.frontmatter.image as string}
          background={source.frontmatter.background_image as string}
          credit={source.frontmatter.image_credit as string}
        />
        <article
          id="chapter-contents"
          className={`prose space-y-[12.5px] ${slug}`}
        >
          <MDXRemote
            {...source}
            components={{
              Model,
              Box,
              Picture,
              PDFOnly,
              h1: heading("h1"),
              h2: heading("h2"),
              h3: heading("h3"),
              h4: heading("h4"),
              h5: heading("h5"),
              h6: heading("h6"),
              sup: (props) => <Footnote info={props.children} />,
              Image,
              Diagram,
              section: (props) => {
                // @ts-expect-error Ignore TypeScript error for custom attribute
                if (props['data-footnotes']) {
                  return <section data-pagefind-ignore {...props} />;
                }
                return <section {...props} />;
              },
            }}
          />
        </article>
        {source.frontmatter.next_chapter! && source.frontmatter.next_chapter_title! &&
          <div className="max-w-box mx-auto">
            <Link className=" ml-auto mr-0 block overflow-hidden text-white rounded bg-background shadow w-fit max-w-box mt-10" href={source.frontmatter.next_chapter}>
              <div className="bg-silver next-chapter hover-shine p-3 md:p-5">
                {source.frontmatter.next_chapter_title}
              </div>
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
    .filter((path) => path.endsWith(".mdx") || path.endsWith(".md"))
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
  const chapterFile = fs.readFileSync(`content/fae5/${slug}.mdx`);
  const mdxSource = await serialize(chapterFile, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeGlyphs],
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
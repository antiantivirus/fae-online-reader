import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState, useEffect } from "react";
import Star from "../icons/star";
import { useRouter } from "next/router";
import AccordArrow from "../icons/accordArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GithubSlugger from "github-slugger";

const path = "/briefing/fae5/";

const tableOfContents = [
  {
    title: "Preface",
    slug: "0-preface",
  },
  {
    title: "Executive Summary",
    slug: "01-executive-summary",
  },
  {
    title: "Introduction",
    slug: "02-introduction",
  },
  {
    title: "Creative R&D",
    slug: "03-creative-rd",
    subChapters: [
      {
        title: "A Framework for Public Claims on Resources",
      },
      {
        title: "AI Tech Stack",
        subChapters: [
          "Application layer",
          "Network protocols layer",
          "Model layer",
          "Data layer",
          "Compute layer",
          "Server networks layer",
          "Natural resources layer",
        ],
      },
    ],
  },
  {
    title: "1: Artist",
    slug: "04-artist",
    subChapters: [
      {
        title: "DATA: Civic Orgs as Dormant Data Keepers",
        subChapters: [
          "The Dawn of Organisational Self-Knowledge",
          "Latent Data Troves",
          "Data Is Relational",
          "Trusted Data Stewards",
          "Soft Power Diplomacy",
        ],
      },
      {
        title: "MODEL: Culture Shaping Model Shaping Culture",
        subChapters: [
          "Disambiguating Technical Opacity and Transparency",
          "Cultivating Trust and Verifiability",
          "Models Offer a New Compression Technique",
          "New Public Mission Orgs for New Public Mechanisms",
          "Alignment’s Shadow Negotiations",
          "Ways of Seeing in the Latent Space",
          "Minotaur vs Centaur Framework of AI Digital Transformation",
        ],
      },
      {
        title: "COMPUTE: High Barriers to Cultural Entry",
        subChapters: [
          "Supply-chain Geopolitics",
          "IP Empire",
          "State as a Broker of Compute Allocations",
          "Experiments & Research for a Less Computationally Intensive AI Stack",
        ],
      },
    ],
  },
  {
    title: "2: Organisation",
    slug: "05-organisation",
    subChapters: [
      {
        title: "Training Data as Shadow Labour",
        subChapters: [
          "Leverage IP for Opt In Returns",
          "Leverage Spawning for Opt Out Bargaining Power",
          "Data Brokerage for a Networked Commons",
          "Emerging Accountability Mechanisms",
          "Synthetic Crafting",
          "Iteration at the Core of Synthetic Crafting",
          "Edging into Unchartered Territory",
          "From Deskilling to Reskilling",
          "From Model Querying to Seamless Intermediation",
        ],
      },
      {
        title: "Semi-Autonomous Aesthetics",
        subChapters: [
          "Convergence Engines",
          "Style Capture",
          "Recombinant Aesthetics in the New Weird",
          "Cross-Pollinating Systems",
          "Modalities for AI Tool Deployment",
          "Model-Making as Meaning-Making",
          "Systems Builders",
        ],
      },
      {
        title: "From Systems-Building to Worldbuilding",
        subChapters: [
          "Recombinant Bubble Worlds",
          "Agent-training Arenas",
          "Complex System Choreography",
        ],
      },
      {
        title: "A New Era of (Art) Tech Development",
        subChapters: [
          "Exploratory Use-Case Space",
          "Artist as Influencer",
          "Case for Institutional Brokerage and Intermediation",
        ],
      },
    ],
  },
  {
    title: "3: Ecosystem",
    slug: "06-ecosystem",
    subChapters: [
      {
        title:
          "Investing into the Foundations of the AxAT Ecosystem with a Public Mission",
        subChapters: [
          "Advanced Production Capabilities",
          "Protocols for Organisational Interoperability",
          "New Ownership and Distribution Models",
          "New Systems of Measurement",
        ],
      },
      {
        title:
          "Recommendations for a Proactive AxAT Participation in Public AI",
        subChapters: [
          "Sandboxing of New Organisational Practices and Forms",
          "Public Data Market Mechanisms",
          "New IP Paradigms",
          "Early cross-technological use-cases",
          "Lobbying for deeper AI systems access and compute quotas on behalf of the cultural sector",
        ],
      },
    ],
  },
  {
    title: "Recommendations",
    slug: "07-recommendations",
  },
  {
    title: "Postface",
    slug: "08-postface",
  },
];

export default function TOC() {
  const [accordOpen, setAccordOpen] = useState<string>("");
  const { asPath } = useRouter();
  const [tocOpen, setTocOpen] = useState(false);
  const slugger = new GithubSlugger();

  useEffect(() => {
    setTocOpen(false);
  }, [asPath]);

  return (
    <nav
      data-pagefind-ignore="all"
      id="toc"
      className="fixed left-1.5 top-1/2 z-30 -translate-y-1/2 transform lg:left-2.5 lg:top-[80px] lg:h-[80vh] lg:translate-y-0 lg:transform-none"
    >
      <Dialog.Root open={tocOpen} onOpenChange={setTocOpen}>
        {/* <Dialog.Trigger asChild> */}
        {/* <button aria-label="Open table of contents" className="h-full"> */}
        <ol
          onMouseEnter={() => {
            setTocOpen(true);
          }}
          className="flex h-full flex-col gap-4 hover:cursor-pointer lg:justify-between"
        >
          {tableOfContents.map((chapter) => (
            <li key={chapter.title} className="group">
              <Dialog.Trigger asChild>
                <button
                  aria-hidden
                  // onMouseEnter={() => {
                  //   setTocOpen(true);
                  //   setAccordOpen(chapter.title);
                  // }}
                  className={`group relative flex items-center `}
                >
                  <Star active={asPath.includes(chapter.slug)} className="stroke-white fill-white" />
                  {/* {asPath == chapter.link && <p>Active</p>} */}
                  <span
                    className={`pointer-events-none absolute left-[30px] top-[7px] hidden w-max rounded px-2 text-white ${asPath.includes(chapter.slug) && "font-bold xl:block"}`}
                  >
                    {chapter.title}
                  </span>
                </button>
              </Dialog.Trigger>
            </li>
          ))}
        </ol>
        {/* </button> */}
        {/* </Dialog.Trigger> */}

        <Dialog.Portal>
          <Dialog.Content
            onMouseLeave={() => [setTocOpen(false)]}
            className="dialog-left fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100%-70px)] w-[480px] max-w-[90vw] flex-col rounded-tr bg-background px-2.5 pl-2.5 text-primary shadow"
          >
            <Dialog.Title className="sr-only">Table of Contents</Dialog.Title>
            <Accordion.Root
              className="h-full overflow-auto"
              type="single"
              value={accordOpen}
              onValueChange={setAccordOpen}
              collapsible={true}
            >
              {tableOfContents.map((chapter) => (
                <div key={chapter.title}>
                  {chapter.subChapters ? (
                    <Accordion.Item
                      value={chapter.title}
                      onMouseEnter={() => setAccordOpen(chapter.title)}
                      onMouseLeave={() => setAccordOpen("")}
                    >
                      <Accordion.Header asChild>

                        <div className="flex items-center gap-2">
                          <Link
                            className="group flex items-center gap-2 stroke-primary text-medium md:text-xl"
                            href={path + chapter.slug}
                          >
                            <Star active={asPath.includes(chapter.slug)} />
                            <span className="mt-1.5">{chapter.title}</span>
                          </Link>
                          <Accordion.Trigger className="group">
                            <div className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180">
                              <AccordArrow />
                            </div>
                          </Accordion.Trigger>
                        </div>
                      </Accordion.Header>
                      <Accordion.Content className="ml-12 overflow-hidden hover:overflow-visible data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                        {chapter.subChapters.map((subChapter) => (
                          <ol key={subChapter.title} className="mb-2.5 ">
                            <li className="relative group">
                              <Star className="absolute -left-5 top-[1.5px] transition group-hover:opacity-100 opacity-0 w-5 h-5 stroke-primary" />
                              <Link
                                className="text-base"
                                href={
                                  path +
                                  chapter.slug +
                                  "#" +
                                  slugger.slug(subChapter.title)
                                }
                              >
                                {subChapter.title}
                              </Link>
                            </li>
                            {subChapter.subChapters && (
                              <ol className="ml-5">
                                {subChapter.subChapters.map((subSubChapter) => (
                                  <li key={subSubChapter} className="relative group stroke-primary">
                                    <Star className="absolute -left-5 top-[1.5px] transition group-hover:opacity-100 opacity-0 w-5 h-5 stroke-primary" />
                                    <Link
                                      key={subSubChapter}
                                      className="text-base"
                                      href={
                                        path +
                                        chapter.slug +
                                        "#" +
                                        slugger.slug(subSubChapter)
                                      }
                                    >
                                      {subSubChapter}
                                    </Link>
                                  </li>
                                ))}
                              </ol>
                            )}
                          </ol>
                        ))}
                      </Accordion.Content>
                    </Accordion.Item>
                  ) : (
                    <Link
                      className="group flex items-center gap-2 stroke-primary text-medium md:text-xl"
                      href={path + chapter.slug}
                    >
                      <Star active={asPath.includes(chapter.slug)} />
                      <span className="mt-1.5">{chapter.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </Accordion.Root>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav >
  );
}

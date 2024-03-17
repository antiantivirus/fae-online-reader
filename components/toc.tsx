import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState, useEffect } from "react";
import Star from "./icons/star";
import { useRouter } from "next/router";
import AccordArrow from "./icons/accordArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GithubSlugger from "github-slugger";

const tableOfContents = [
  {
    title: "Preface",
    link: "/fae4/preface",
  },
  {
    title: "Introduction",
    link: "/fae4/introduction",
  },
  {
    title: "Defining Public AI",
    link: "/fae4/defining-public-ai",
    subChapters: [
      {
        title: "A Framework for Public Claims on Resources",
      },
      {
        title: "AI Tech Stack",
        subChapters: [
          {
            title: "Application layer",
          },
          {
            title: "Network protocols layer",
          },
          {
            title: "Model layer",
          },
          {
            title: "Data layer",
          },
          {
            title: "Compute layer",
          },
          {
            title: "Server networks layer",
          },
          {
            title: "Natural resources layer",
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 1: Organisation",
    link: "/fae4/chapter-1",
    subChapters: [
      {
        title: "DATA: Civic Orgs as Dormant Data Keepers",
        subChapters: [
          {
            title: "The Dawn of Organisational Self-Knowledge",
          },
          {
            title: "Latent Data Troves",
          },
          {
            title: "Data Is Relational",
          },
          {
            title: "Trusted Data Stewards",
          },
          {
            title: "Soft Power Diplomacy",
          },
        ],
      },
      {
        title: "MODEL: Culture Shaping Model Shaping Culture",
        subChapters: [
          {
            title: "Disambiguating Technical Opacity and Transparency",
          },
          {
            title: "Cultivating Trust and Verifiability",
          },
          {
            title: "Models Offer a New Compression Technique",
          },
          {
            title: "New Public Mission Orgs for New Public Mechanisms",
          },
          {
            title: "Alignment’s Shadow Negotiations",
          },
          {
            title: "Ways of Seeing’ in the Latent Space",
          },
          {
            title: "Minotaur vs Centaur Framework of AI Digital Transformation",
          },
        ],
      },
      {
        title: "COMPUTE: High Barriers to Cultural Entry",
        subChapters: [
          {
            title: "Supply-chain Geopolitics",
          },
          {
            title: "IP Empire",
          },
          {
            title: "State as a Broker of Compute Allocations",
          },
          {
            title:
              "Experiments & Research for a Less Computationally Intensive AI Stack",
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 2: Artist",
    link: "/fae4/chapter-2",
    subChapters: [
      {
        title: "To be added",
        subChapters: [
          {
            title: "Sub sub chapter",
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 3: Ecosystem",
    link: "/fae4/chapter-3",
    subChapters: [
      {
        title: "To be added",
        subChapters: [
          {
            title: "Sub sub chapter",
          },
        ],
      },
    ],
  },
  {
    title: "Postface",
    link: "/fae4/postface",
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

  // useGSAP(() => {
  //   gsap.set("#toc", {
  //     translateX: -300,
  //     autoAlpha: 1,
  //     ease: "power4.out",
  //   });
  //   gsap.to("#toc", {
  //     translateX: 0,
  //     autoAlpha: 1,
  //     ease: "power4.out",
  //     duration: 1,
  //     delay: 0.5,
  //   });
  // });

  return (
    <nav
      id="toc"
      className="fixed left-1.5 top-1/2 z-30 -translate-y-1/2 transform lg:left-2.5 lg:top-[80px] lg:h-[80vh] lg:translate-y-0 lg:transform-none"
    >
      <Dialog.Root open={tocOpen} onOpenChange={setTocOpen}>
        {/* <Dialog.Trigger asChild> */}
        {/* <button aria-label="Open table of contents" className="h-full"> */}
        <ol className="flex h-full flex-col gap-4 lg:justify-between">
          {tableOfContents.map((chapter) => (
            <li key={chapter.title} className="group">
              <Dialog.Trigger asChild>
                <button
                  aria-hidden
                  onClick={() => setAccordOpen(chapter.title)}
                  className={`group relative flex items-center stroke-primary `}
                >
                  <Star active={asPath.includes(chapter.link)} />
                  {/* {asPath == chapter.link && <p>Active</p>} */}
                  <span
                    className={`absolute left-[30px] top-[7px] hidden w-max rounded bg-background px-2 text-primary xl:group-hover:block ${asPath.includes(chapter.link) && "font-bold xl:block"}`}
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
          <Dialog.Content className="dialog-left fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100vh-60px)] w-[480px] max-w-[90vw] flex-col rounded-tr bg-background px-2.5 pl-2.5 text-primary shadow">
            <Dialog.Title className="sr-only">Table of Contents</Dialog.Title>
            <Accordion.Root
              className="h-full overflow-auto"
              type="single"
              value={accordOpen}
              onValueChange={setAccordOpen}
            >
              {tableOfContents.map((chapter) => (
                <div key={chapter.title}>
                  {chapter.subChapters ? (
                    <Accordion.Item value={chapter.title}>
                      <Accordion.Header asChild>
                        <div className="flex items-center gap-2">
                          <Link
                            className="group flex items-center gap-2 stroke-primary text-xl"
                            href={chapter.link}
                          >
                            <Star active={asPath.includes(chapter.link)} />
                            <span className="mt-1.5">{chapter.title}</span>
                          </Link>
                          <Accordion.Trigger className="group">
                            <div className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180">
                              <AccordArrow />
                            </div>
                          </Accordion.Trigger>
                        </div>
                      </Accordion.Header>
                      <Accordion.Content className="ml-10 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                        {chapter.subChapters.map((subChapter) => (
                          <ol key={subChapter.title} className="mb-2.5">
                            <li>
                              <Link
                                className="text-base"
                                href={
                                  chapter.link +
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
                                  <li key={subSubChapter.title}>
                                    <Link
                                      key={subSubChapter.title}
                                      className="text-base"
                                      href={
                                        chapter.link +
                                        "#" +
                                        slugger.slug(subSubChapter.title)
                                      }
                                    >
                                      {subSubChapter.title}
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
                      className="group flex items-center gap-2 stroke-primary text-xl"
                      href={chapter.link}
                    >
                      <Star active={asPath.includes(chapter.link)} />
                      <span className="mt-1.5">{chapter.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </Accordion.Root>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
}

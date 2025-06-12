import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import Star from "../icons/star";
import { useRouter } from "next/router";
import AccordArrow from "../icons/accordArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GithubSlugger from "github-slugger";

interface SubChapter {
  title: string;
  subChapters?: SubChapter[];
}

interface Chapter {
  title: string;
  slug: string;
  subChapters?: SubChapter[];
}

const path = "/briefing/fae5/";

const tableOfContents: Chapter[] = [
  {
    title: "Credits",
    slug: "01-credits",
  },
  {
    title: "Preface",
    slug: "02-preface",
  },
  {
    title: "Introduction",
    slug: "03-introduction",
    subChapters: [
      {
        title: "Art and Advanced Technologies Lens on Creative R&D",
      },
      {
        title: "The Metrics Gap"
      },
      {
        title: "Navigating this Briefing"
      },
      {
        title: "Methodology"
      }
    ],
  },
  {
    title: "1: Creative R&D",
    slug: "04-creative-rd",
    subChapters: [
      {
        title: "Creative R&D and the Creative Industries",
      },
      {
        title: "Recalibrating the Scope of Creative R&D",
      },

    ],
  },
  {
    title: "2: Artist",
    slug: "05-artist",
    subChapters: [
      {
        title: "Who is an AxAT Artist, and what is an AxAT Practice?"
      },
      {
        title: "In focus: Lauren Lee McCarthy"
      },
      {
        title: "In focus: Ian Cheng"
      },
      {
        title: "In focus: Natsai Audrey Chieza & Faber Futures"
      },
      {
        title: "Claiming Art's Rightful Role in Innovation"
      },
      {
        title: "Artists as Cross-Pollinators of Skills and Ideas"
      },
      {
        title: " Barriers to Recognition and Impact"
      }
    ]
  },
  {
    title: "3: Infrastructure",
    slug: "06-infrastructure",
    subChapters: [
      {
        title: "How Cultural Organisations Host and Advance Creative R&D"
      },
      {
        title: "Cross-Sector Currents"
      },
      {
        title: "Where to Next?"
      }
    ],
  },
  {
    title: "4: Proposals",
    slug: "07-Proposals",
    subChapters: [
      {
        title: "1: Establish a Cross-Departmental Entity for the Advancement of Creative R&D",
      },
      {
        title: "2: Broaden DSIT\'s Definition of R&D to Encompass Creative R&D"
      },
      {
        title: "3: Adopt Ecosystem Measurement Models"
      },
      {
        title: "4: Diversify Funding Mechanisms and Approaches to Account for the Full Spectrum of Creative R&D Activity"
      }
    ],
  },
  {
    title: "Postface",
    slug: "08-postface",
  },
  {
    title: "Contributors",
    slug: "09-contributors",
  },
];

export default function TOC() {
  const [accordOpen, setAccordOpen] = useState<string>("");
  const { asPath } = useRouter();
  const [tocOpen, setTocOpen] = useState(false);
  const slugger = new GithubSlugger();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const accordionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeouts when component unmounts to prevent memory leaks
  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
      if (accordionTimeoutRef.current) clearTimeout(accordionTimeoutRef.current);
    };
  }, []);

  // Close TOC when path changes
  useEffect(() => {
    setTocOpen(false);
  }, [asPath]);

  // Handle opening the TOC with debouncing
  const handleOpenToc = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setTocOpen(true);
    }, 100); // Small delay to prevent accidental triggers
  };

  // Handle closing the TOC with debouncing
  const handleCloseToc = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setTocOpen(false);
    }, 300); // Longer delay for closing to prevent accidental closes
  };

  // Handle accordion opening with debouncing
  const handleAccordionOpen = (title: string) => {
    if (accordionTimeoutRef.current) clearTimeout(accordionTimeoutRef.current);
    accordionTimeoutRef.current = setTimeout(() => {
      setAccordOpen(title);
    }, 150);
  };

  // Handle accordion closing with debouncing
  const handleAccordionClose = () => {
    if (accordionTimeoutRef.current) clearTimeout(accordionTimeoutRef.current);
    accordionTimeoutRef.current = setTimeout(() => {
      setAccordOpen("");
    }, 400); // Longer delay for closing to prevent flickering
  };

  return (
    <nav
      data-pagefind-ignore="all"
      id="toc"
      className="fixed left-1.5 top-1/2 z-50 -translate-y-1/2 transform lg:left-2.5 lg:top-[80px] lg:h-[80vh] lg:translate-y-0 lg:transform-none"
    >
      <Dialog.Root open={tocOpen} onOpenChange={setTocOpen}>


        <ol



          onMouseEnter={handleOpenToc}
          onMouseLeave={handleCloseToc}
          className="flex h-full flex-col gap-4 hover:cursor-pointer lg:justify-between"
        >
          {tableOfContents.map((chapter) => (
            <li key={chapter.title} className="group">
              <Dialog.Trigger asChild>
                <button
                  aria-hidden
                  className={`group relative flex items-center`}
                >
                  <Star active={asPath.includes(chapter.slug)} className="stroke-white fill-white" />

                  <span
                    className={`pointer-events-none absolute left-[30px] top-[7px] hidden w-max rounded px-2 text-white font-slackLight ${asPath.includes(chapter.slug) && "font-bold xl:block"}`}
                  >
                    {chapter.title}
                  </span>
                </button>
              </Dialog.Trigger>
            </li>
          ))}
        </ol>



        <Dialog.Portal>
          <Dialog.Content

            onMouseEnter={() => {
              if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
            }}
            onMouseLeave={handleCloseToc}
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

                <div key={chapter.title} className="mb-2">
                  {chapter.subChapters ? (
                    <Accordion.Item
                      value={chapter.title}


                      onMouseEnter={() => handleAccordionOpen(chapter.title)}
                      onMouseLeave={handleAccordionClose}
                    >
                      <Accordion.Header asChild>

                        <div className="flex items-center gap-2">
                          <Link
                            className="group flex items-center gap-2 stroke-primary text-medium md:text-xl font-slackLight"
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
                                className="text-base font-slackLight"
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
                                  <li key={subSubChapter.title} className="relative group stroke-primary">
                                    <Star className="absolute -left-5 top-[1.5px] transition group-hover:opacity-100 opacity-0 w-5 h-5 stroke-primary" />
                                    <Link
                                      className="text-base font-slackLight"
                                      href={
                                        path +
                                        chapter.slug +
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
                      className="group flex items-center gap-2 stroke-primary text-medium md:text-xl font-slackLight"
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

    </nav>
  );
}
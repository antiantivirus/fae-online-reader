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
        title: "Who is an AxAT Artist, and what is an AxAT Practice?",
        subChapters: [
          "A Forum for Public Interest",
          "New Strategic Visions",
          "Innovative Tools and Infrastructures"
        ]
      },
      {
        title: "In focus: Lauren Lee McCarthy"
      },
      {
        title: "In focus: Ian Cheng"
      },
      {
        title: "In foucs: Natsai Audrey Chieza & Faber Futures"
      },
      {
        title: "Claiming Art's Rightful Role in Innovation",
        subChapters: [
          "Basic Research",
          "Applied Research",
          "Experimental Development"
        ]
      },
      {
        title: "Artists as Cross-Pollinators of Skills and Ideas",
        subChapters: [
          "Engineers and Technologists",
          "Consultants and Cross-Disciplinary Researchers",
          "Advanced Users and Beta Testers",
          "Auditors and Red Teams",
          "Educators and Knowledge Disseminators"
        ]
      },
      {
        title: " Barriers to Recognition and Impact",
        subChapters: [
          "Identity Problems: Misaligned Economic Structures",
          "Institutional Misclassifications: Lagging Organisational Practice and the 'Public Engagement' Trap",
          "Intellectual Property Challenges: Between Open Culture and Value Capture",
          "The Data Problem: Value Recognition and Measurement"
        ]
      }
    ]
  },
  {
    title: "3: Infrastructure",
    slug: "06-infrastructure",
    subChapters: [
      {
        title: "How Cultural Organisations Host and Advance Creative R&D",
        subChapters: [
          "Types of AxAT Creative R&D Organisational Models",
        ],
      },
      {
        title: "Cross-Sector Currents",
        subChapters: [
          "Cultural-Civic Partnerships: Building Alternative Infrastructure",
          "Technology-Industry Partnerships: In-Between Paradigms",
          "Beyond Marketing Logic: Seeds of Co-Development",
          "Academic Coalitions: Where AxAT and Academia Meet",
          "Exhibition as Research Platform",
          "Educational Collaborations and Skills Development",
          "Shared Technical Infrastructure",
          "Research Partnerships and Knowledge Exchange"
        ]
      },
      {
        title: "Where to Next?"
      }
    ],
  },
  {
    title: "4: Innovation",
    slug: "07-innovation",
    subChapters: [
      {
        title: "Proposal 1: Establish a Cross-Departmental Entity for the Advancement of Creative R&D",
      },
      {
        title: "Proposal 2: Broaden DSIT\'s Definition of R&D to Encompass Creative R&D"
      },
      {
        title: "Proposal 3: Adopt Ecosystem Measurement Models"
      },
      {
        title: "Proposal 4: Diversify Funding Mechanisms and Approaches to Account for the Full Spectrum of Creative R&D Activity"
      }
    ],
  },
  {
    title: "Postface",
    slug: "08-postface",
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
    title: "Contributors",
    slug: "09-contributors",
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
      className="fixed left-1.5 top-1/2 z-50 -translate-y-1/2 transform lg:left-2.5 lg:top-[80px] lg:h-[80vh] lg:translate-y-0 lg:transform-none"
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

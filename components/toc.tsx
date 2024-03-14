import { Drawer } from "vaul";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Star from "./icons/star";
import { useRouter } from "next/router";
import AccordArrow from "./icons/accordArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const tableOfContents = [
  {
    title: "Introduction",
    link: "/fae4/introduction",
  },
  {
    title: "Defining Public AI",
    link: "/fae4/chapter-0",
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
        title: "COMPUTE: High Barriers to Cultural Entry",
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
    ],
  },
  {
    title: "Chapter 2: Artist",
    link: "/fae4/chapter-2",
    subChapters: [
      {
        title: "Sub chapter",
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
        title: "Subchapter",
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
      className="fixed left-1.5 top-1/2 z-30 -translate-y-1/2 transform lg:left-2.5 lg:top-16 lg:h-[80vh] lg:translate-y-0 lg:transform-none"
    >
      <Drawer.Root direction="left" open={tocOpen} onOpenChange={setTocOpen}>
        <ol className="flex h-full flex-col gap-4 lg:justify-between">
          {tableOfContents.map((chapter) => (
            <li key={chapter.title} className="group">
              <Drawer.Trigger asChild>
                <button
                  onClick={() => setAccordOpen(chapter.title)}
                  className={`group relative flex items-center stroke-primary `}
                >
                  <Star active={asPath.includes(chapter.link)} />
                  {/* {asPath == chapter.link && <p>Active</p>} */}
                  <span
                    className={`absolute left-6 hidden w-max rounded bg-background px-2 text-primary lg:group-hover:block ${asPath.includes(chapter.link) && "font-black lg:block"}`}
                  >
                    {chapter.title}
                  </span>
                </button>
              </Drawer.Trigger>
            </li>
          ))}
        </ol>

        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100vh-60px)] w-[400px] max-w-[90vw] flex-col rounded-tr bg-background px-5 pl-2.5 text-primary shadow">
            <Drawer.Title className="sr-only">Table of Contents</Drawer.Title>
            <Accordion.Root
              className="h-full overflow-auto py-5"
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
                            {chapter.title}
                          </Link>
                          <Accordion.Trigger className="group">
                            <div className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180">
                              <AccordArrow />
                            </div>
                          </Accordion.Trigger>
                        </div>
                      </Accordion.Header>
                      <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp ml-10 overflow-hidden">
                        {chapter.subChapters.map((subChapter) => (
                          <ol key={subChapter.title} className="mb-2.5">
                            <li>
                              <Link
                                className="text-base"
                                href={
                                  chapter.link +
                                  "#" +
                                  subChapter.title
                                    .replaceAll(" ", "-")
                                    .toLowerCase()
                                }
                              >
                                {subChapter.title}
                              </Link>
                            </li>
                            {subChapter.subChapters && (
                              <ol className="ml-5">
                                {subChapter.subChapters.map((subSubChapter) => (
                                  <li>
                                    <Link
                                      key={subSubChapter.title}
                                      className="text-base"
                                      href={
                                        chapter.link +
                                        "#" +
                                        subSubChapter.title
                                          .replaceAll(" ", "-")
                                          .toLowerCase()
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
                      {chapter.title}
                    </Link>
                  )}
                </div>
              ))}
            </Accordion.Root>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [footnotesOpen, setFootnoteOpen] = useState(false);
  const [footnotes2Open, setFootnote2Open] = useState(false);

  return (
    <article className="prose">
      <div>
        <div className="sticky top-12 z-10 mb-4 bg-white p-4 pb-0">
          <div className="border-b border-black md:mx-auto md:max-w-xl">
            <h1>Where to start</h1>
          </div>
        </div>
        <div className="w-screen overflow-hidden px-4">
          <div
            className={`flex gap-10 transition-all md:justify-center ${
              footnotesOpen
                ? "-translate-x-[200px] md:translate-x-0"
                : "translate-x-0"
            }`}
          >
            <div className="hidden w-[200px] md:block"></div>
            <p
              onClick={() => setFootnoteOpen(false)}
              className="w-10/12 shrink-0 md:max-w-xl"
            >
              <Image
                className="float-left m-1 mr-2"
                alt=""
                src="/test-image.jpg"
                height={60}
                width={30}
              />
              An exposed operational surface allowing internal and external
              users to interact with an organisation's internal functionalities
              could guide organisational primitives with functions akin to a
              software service's Application Programming Interface (API).
              Existing examples of exposed application surfaces include public
              technical platforms such as Transport for London's open data Q
              API, or organisational knowledge bases such as wikis.
              <sup className="mr-1" onClick={() => setFootnoteOpen(true)}>
                1
              </sup>
              <sup onClick={() => setFootnoteOpen(true)}>2</sup> The UK
              government's Contracts Finder interface is another example of an
              exposed organisational surface for well- defined procurement
              needs.<sup onClick={() => setFootnoteOpen(true)}>3</sup> Whether
              as a partnership approach or a public resource, interfaces that
              enable as-vet-unknown users to plug in to an organisation's
              backend functionalities allow more bottom-up and permissionless
              forms of ecosvstemic innovation
            </p>
            <div
              onClick={() => setFootnoteOpen(true)}
              className="mt-12 w-[200px] shrink-0"
            >
              <ol className="space-y-4">
                <li id="fn01" role="doc-footnote">
                  <sup>1</sup> Such a model would effectively function as a
                  ‘social goals’ p.115 tax on closed IP models.
                </li>
                <li>
                  <sup>2</sup> See Transport for London’s open data platform.
                </li>
                <li>
                  <sup>3</sup> See Gnosis Guild’s Zodiac Wiki.
                </li>
              </ol>
            </div>
          </div>

          <div className="mx-auto mb-8 h-24 max-w-48 bg-black/10"></div>
          <div
            className={`flex gap-10 transition-all md:justify-center ${
              footnotes2Open
                ? "-translate-x-[200px] md:translate-x-0"
                : "translate-x-0"
            }`}
          >
            <div className="hidden w-[200px] md:block"></div>

            <p
              onClick={() => setFootnote2Open(false)}
              className="w-10/12 shrink-0 md:max-w-xl"
            >
              Like decentralisation, openness ✐ can lead to its own enclosure.
              For example, Uber makes use of Transport for London data even as
              it thwarts regulatory oversight, while many of the most important
              open-source ✐ projects are managed by Google and Meta.
              <sup onClick={() => setFootnoteOpen(true)}>4</sup>
              In order to maintain a balance between openness ✐ and risk, a
              traceable decentralised protocol between service users and
              providers, along with 117 flexible licensing arrangements, would
              enable complex interoperations across the cultural ecosystem.
            </p>
            <div
              onClick={() => setFootnote2Open(true)}
              className="mt-12 w-[200px] shrink-0"
            >
              <ol className="space-y-4">
                <li id="fn01" role="doc-footnote">
                  <sup>4</sup> See Natasha Lomas Uber Adds Real-Time Public
                  Transport p.117 Data for London (2019), and Adrian
                  Bridgewater, The Impact of Tech Giants on Open Source (2019).
                </li>
                <li>
                  <sup>5</sup> An example of a reconfigured historical effort
                  within p.136 that vein is E.A.T_WORKS—‘an experimental Web3
                  art organisation that takes its name and inspiration from
                  Experiments in Art and Technology (EAT), founded in the 1960s
                  by artists Robert Rauschenberg and Robert Whitman together
                  with Bell Labs engineers Billy Klüver and Fred Waldhauer’, and
                  specialises in matching artists and technologists, whilst
                  underwriting the effort by building tools and community for
                  collecting NFTs.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="h-24"></div>
      </div>
      <div>
        <div className="sticky top-12 z-10 mb-4 bg-white p-4 pb-0">
          <div className="border-b border-black md:mx-auto md:max-w-xl">
            <h1>Where to start</h1>
          </div>
        </div>
        <div className="w-screen ">
          <div
            className={`flex gap-10 overflow-auto px-4 transition-all md:justify-center`}
          >
            <div className="hidden w-[200px] md:block"></div>
            <p
              onClick={() => setFootnoteOpen(false)}
              className="w-10/12 shrink-0 md:max-w-xl"
            >
              <Image
                className="float-left m-1 mr-2"
                alt=""
                src="/test-image.jpg"
                height={60}
                width={30}
              />
              An exposed operational surface allowing internal and external
              users to interact with an organisation's internal functionalities
              could guide organisational primitives with functions akin to a
              software service's Application Programming Interface (API).
              Existing examples of exposed application surfaces include public
              technical platforms such as Transport for London's open data Q
              API, or organisational knowledge bases such as wikis.
              <sup className="mr-1" onClick={() => setFootnoteOpen(true)}>
                1
              </sup>
              <sup onClick={() => setFootnoteOpen(true)}>2</sup> The UK
              government's Contracts Finder interface is another example of an
              exposed organisational surface for well- defined procurement
              needs.<sup onClick={() => setFootnoteOpen(true)}>3</sup> Whether
              as a partnership approach or a public resource, interfaces that
              enable as-vet-unknown users to plug in to an organisation's
              backend functionalities allow more bottom-up and permissionless
              forms of ecosvstemic innovation
            </p>
            <div
              onClick={() => setFootnoteOpen(true)}
              className="mt-12 w-[200px] shrink-0"
            >
              <ol className="space-y-4">
                <li id="fn01" role="doc-footnote">
                  <sup>1</sup> Such a model would effectively function as a
                  ‘social goals’ p.115 tax on closed IP models.
                </li>
                <li>
                  <sup>2</sup> See Transport for London’s open data platform.
                </li>
                <li>
                  <sup>3</sup> See Gnosis Guild’s Zodiac Wiki.
                </li>
              </ol>
            </div>
          </div>

          <div className="mx-auto mb-8 h-24 max-w-48 bg-black/10"></div>
          <div
            className={`flex gap-10 overflow-auto px-4 transition-all md:justify-center`}
          >
            <div className="hidden w-[200px] md:block"></div>
            <p
              onClick={() => setFootnote2Open(false)}
              className="w-10/12 shrink-0 md:max-w-xl"
            >
              Like decentralisation, openness ✐ can lead to its own enclosure.
              For example, Uber makes use of Transport for London data even as
              it thwarts regulatory oversight, while many of the most important
              open-source ✐ projects are managed by Google and Meta.
              <sup onClick={() => setFootnoteOpen(true)}>4</sup>
              In order to maintain a balance between openness ✐ and risk, a
              traceable decentralised protocol between service users and
              providers, along with 117 flexible licensing arrangements, would
              enable complex interoperations across the cultural ecosystem.
            </p>
            <div
              onClick={() => setFootnote2Open(true)}
              className="mt-12 w-[200px] shrink-0"
            >
              <ol className="space-y-4">
                <li id="fn01" role="doc-footnote">
                  <sup>4</sup> See Natasha Lomas Uber Adds Real-Time Public
                  Transport p.117 Data for London (2019), and Adrian
                  Bridgewater, The Impact of Tech Giants on Open Source (2019).
                </li>
                <li>
                  <sup>5</sup> An example of a reconfigured historical effort
                  within p.136 that vein is E.A.T_WORKS—‘an experimental Web3
                  art organisation that takes its name and inspiration from
                  Experiments in Art and Technology (EAT), founded in the 1960s
                  by artists Robert Rauschenberg and Robert Whitman together
                  with Bell Labs engineers Billy Klüver and Fred Waldhauer’, and
                  specialises in matching artists and technologists, whilst
                  underwriting the effort by building tools and community for
                  collecting NFTs.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="h-24"></div>
      </div>
      <div>
        <div className="sticky top-12 z-10 mb-4 bg-white p-4 pb-0">
          <div className="border-b border-black md:mx-auto md:max-w-xl">
            <h1>Where to start</h1>
          </div>
        </div>
        <div className="w-screen overflow-hidden px-4">
          <div>
            <p
              onClick={() => setFootnoteOpen(false)}
              className="md:mx-auto md:max-w-xl"
            >
              <Image
                className="float-left m-1 mr-2"
                alt=""
                src="/test-image.jpg"
                height={60}
                width={30}
              />
              An exposed operational surface allowing internal and external
              users to interact with an organisation's internal functionalities
              could guide organisational primitives with functions akin to a
              software service's Application Programming Interface (API).
              Existing examples of exposed application surfaces include public
              technical platforms such as Transport for London's open data Q
              API, or organisational knowledge bases such as wikis.
              <span
                className="footnote-button"
                onClick={() => setFootnote2Open(true)}
              >
                1
              </span>{" "}
              <span
                className="footnote-button"
                onClick={() => setFootnote2Open(true)}
              >
                2
              </span>{" "}
              The UK government's Contracts Finder interface is another example
              of an exposed organisational surface for well- defined procurement
              needs.
              <span
                className="footnote-button"
                onClick={() => setFootnote2Open(true)}
              >
                3
              </span>{" "}
              Whether as a partnership approach or a public resource, interfaces
              that enable as-vet-unknown users to plug in to an organisation's
              backend functionalities allow more bottom-up and permissionless
              forms of ecosvstemic innovation
            </p>

            <div
              onClick={() => setFootnoteOpen(true)}
              className="w-[300px] shrink-0 md:float-right"
            >
              <ol className="space-y-4">
                <li id="fn01" role="doc-footnote">
                  <details>
                    <summary>Footnote 1</summary>
                    Such a model would effectively function as a ‘social goals’
                    p.115 tax on closed IP models.
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Footnote 2</summary>
                    See Transport for London’s open data platform.
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Footnote 3</summary>
                    See Gnosis Guild’s Zodiac Wiki.
                  </details>
                </li>
              </ol>
            </div>
          </div>
          <div className="mx-auto my-8 h-24 max-w-48 bg-black/10"></div>
          <div>
            <p
              onClick={() => setFootnote2Open(false)}
              className="md:mx-auto md:max-w-xl"
            >
              Like decentralisation, openness ✐ can lead to its own enclosure.
              For example, Uber makes use of Transport for London data even as
              it thwarts regulatory oversight, while many of the most important
              open-source ✐ projects are managed by Google and Meta.
              <span
                className="footnote-button"
                onClick={() => setFootnote2Open(true)}
              >
                4
              </span>{" "}
              In order to maintain a balance between openness ✐ and risk, a
              traceable decentralised protocol between service users and
              providers, along with 117 flexible licensing arrangements, would
              enable complex interoperations across the cultural ecosystem.
              <span
                className="footnote-button"
                onClick={() => setFootnote2Open(true)}
              >
                5
              </span>{" "}
            </p>
            <div
              onClick={() => setFootnote2Open(true)}
              className="w-[300px] shrink-0 md:float-right"
            >
              <ol className="space-y-4">
                <li id="fn01" role="doc-footnote">
                  <details>
                    <summary>Footnote 4</summary>
                    See Natasha Lomas Uber Adds Real-Time Public Transport p.117
                    Data for London (2019), and Adrian Bridgewater, The Impact
                    of Tech Giants on Open Source (2019).
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Footnote 5</summary>
                    An example of a reconfigured historical effort within p.136
                    that vein is E.A.T_WORKS—‘an experimental Web3 art
                    organisation that takes its name and inspiration from
                    Experiments in Art and Technology (EAT), founded in the
                    1960s by artists Robert Rauschenberg and Robert Whitman
                    together with Bell Labs engineers Billy Klüver and Fred
                    Waldhauer’, and specialises in matching artists and
                    technologists, whilst underwriting the effort by building
                    tools and community for collecting NFTs.
                  </details>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </article>
  );
}

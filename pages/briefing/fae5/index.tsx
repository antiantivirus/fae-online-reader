import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import Download from "@/components/icons/download";

export default function Home() {

  return (
    <main id="sheen" className="h-screen font-slackLight">
      <Link href="/" className=" bg-silver text-white absolute top-4 right-4 rounded-full z-10 overflow-hidden text-[1.25rem]">
        <div className="flex gap-2 items-center hover-shine px-4 py-1">
          <Download className="h-[20px] lg:h-[24px]" colour="white" />
          <span>Download FAE5</span>
        </div>
      </Link>
      <h1 className="sr-only">Future Art Ecosystems 5: Art x Creative R&D</h1>
      <div
        aria-hidden
        className="relative h-[calc(100vh-330px)] overflow-hidden bg-gradient-silver flex justify-center items-center"
      >
      <Image
                src="/images/fae5/FAE5_Cover_digital-transparent.png"
                alt=""
                width={400}
                height={800}
          className="absolute left-1/2 top-[55%] max-h-[70vh] w-auto max-w-[90%] -translate-x-1/2 -translate-y-1/2 transform lg:h-auto lg:max-h-none lg:w-[40vw] lg:max-w-lg 2xl:max-w-2xl"
              />
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full text-silver">
        <div className="flex flex-col-reverse">
          <div className="download-drawer-imagery peer z-50 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/09-contributors"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  Recommendations
                </h3>
              </div>
            </Link>
          </div>
          <div className="download-drawer-imagery peer z-40 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/08-postface"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  Postface
                </h3>
              </div>
            </Link>
          </div>
          <div className="download-drawer-imagery peer z-30 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/07-innovation"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  4: Innovation
                </h3>
                {/* <p className="hidden md:block">
                  This chapter looks at artistic practices that work with
                  different elements of the AI stack.
                </p> */}
              </div>
              <Image
                src="/images/fae5/innovation-thumb.jpg"
                alt=""
                width={114}
                height={64}
                className="aspect-video h-16 bg-silver/20"
              />
            </Link>
          </div>
          <div className="download-drawer-imagery peer z-20 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/06-infrastructure"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  3: Infrastructure
                </h3>
                {/* <p className="hidden md:block">
                  This chapter considers how organisations are being transformed
                  by AI.
                </p> */}
              </div>
              <Image
                src="/images/fae5/core-infra-thumb.jpg"
                alt=""
                width={114}
                height={64}
                className="aspect-video h-16 bg-silver/20"
              />
            </Link>
          </div>
          <div className="download-drawer-diagrams peer z-10 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/05-artist"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  2: Artist
                </h3>
              </div>
              <Image
                src="/images/fae5/innovation-thumb.jpg"
                alt=""
                width={114}
                height={64}
                className="aspect-video h-16 bg-silver/20"
              />
            </Link>
          </div>
          <div className="download-drawer-pdf peer z-[9] -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/04-creative-rd"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  1: Creative R&D
                </h3>
              </div>
              <Image
                src="/images/fae5/new-perspective-thumb.jpg"
                alt=""
                width={114}
                height={64}
                className="aspect-video h-16 bg-silver/20"
              />
            </Link>
          </div>
          <div className="download-drawer-pdf peer z-[8] -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/03-introduction"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  Introduction
                </h3>

              </div>
              <Image
                src="/images/fae5/intro-thumb.jpg"
                alt=""
                width={114}
                height={64}
                className="aspect-video h-16 bg-silver/20"
              />
            </Link>
          </div>
          <div className="download-drawer-pdf z-[7] -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-white p-2 shadow-home transition-all md:focus-within:-translate-y-12 md:hover:-translate-y-12 md:peer-focus-within:-translate-y-12 md:peer-hover:-translate-y-12">
            <Link
              href="/briefing/fae5/02-preface"
              className="flex h-full w-full justify-between"
            >
              <div>
                <h3 className="my-1 text-medium md:my-0 md:text-xl">
                  Preface
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

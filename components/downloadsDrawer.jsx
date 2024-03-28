import * as Dialog from "@radix-ui/react-dialog";
import Download from "./icons/download";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "fathom-client";

const imagery = [
  {
    video:
      "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH0A_PRE_HD.mp4",
    poster: "/images/HOMEPAGE_CH00.jpg",
  },
  {
    video:
      "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH0B_INTRO_HD.mp4",
    poster: "/images/HOMEPAGE_INTRO.jpg",
  },
  {
    video:
      "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH01_ORG_HD.mp4",
    poster: "/images/HOMEPAGE_CH01.jpg",
  },
  {
    video:
      "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH02_ART_HD.mp4",
    poster: "/images/HOMEPAGE_CH02.jpg",
  },
  {
    video:
      "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH03_NETWORK_HD.mp4",
    poster: "/images/HOMEPAGE_CH03.jpg",
  },
];

const diagrams = [
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagrams-final-04.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagrams-final-11.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagrams-final-18.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagram-17-scaled.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagram-11.jpg",
];

export default function DownloadsDialog() {
  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger>
        <Download />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="dialog-bottom fixed bottom-0 right-0 z-50 w-full text-primary">
          <div className="flex flex-col-reverse">
            <div className="download-Dialog-imagery peer z-30 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
              <div className="w-46 aspect-video h-full ">
                <h3 className="text-xl">Imagery</h3>
              </div>
              <Splide
                options={{
                  type: "slide",
                  height: "126px",
                  width: "100%",
                  gap: "1rem",
                  focus: 0,
                  autoWidth: true,
                  autoHeight: true,
                  drag: true,
                  arrows: false,
                }}
                aria-label="Imagery"
              >
                {imagery.map((video) => (
                  <SplideSlide key={video.video}>
                    <Link
                      className="relative"
                      href={video.video}
                      target="_blank"
                      data-umami-event="Crosslucid video downloaded"
                      onClick={() => trackEvent("Crosslucid video downloaded")}
                      download
                    >
                      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                        <Download colour="white" />
                      </div>
                      <Image
                        className="aspect-video"
                        width="224"
                        height="100"
                        src={video.poster}
                        alt=""
                      />
                    </Link>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="download-Dialog-diagrams peer z-20 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
              <div className="w-46 aspect-video h-full ">
                <h3 className="text-xl">Diagrams</h3>
              </div>
              <Splide
                options={{
                  type: "slide",
                  height: "126px",
                  width: "100%",
                  gap: "1rem",
                  focus: 0,
                  autoWidth: true,
                  autoHeight: true,
                  drag: true,
                  arrows: false,
                }}
                aria-label="Diagrams"
              >
                {diagrams.map((diagram) => (
                  <SplideSlide key={diagram}>
                    <Link
                      href={diagram}
                      target="_blank"
                      data-umami-event="Diagram downloaded"
                      onClick={() => trackEvent("Diagram downloaded")}
                      className="relative"
                      download
                    >
                      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                        <Download colour="white" />
                      </div>
                      <Image
                        className="w-46 aspect-video h-full bg-burgundy/20 object-cover"
                        src={diagram}
                        width="224"
                        height="100"
                        alt=""
                      />
                    </Link>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="download-Dialog-pdf z-10 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
              <div className="w-46 aspect-video h-full ">
                <h3 className="text-xl">PDF</h3>
              </div>
              <Link
                href="https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_ArtxPublic-AI.pdf"
                target="_blank"
                data-umami-event="PDF downloaded"
                onClick={() => trackEvent("PDF downloaded")}
                className="relative"
                download
              >
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                  <Download colour="white" />
                </div>
                <Image
                  className="w-46 aspect-video h-full  object-cover"
                  src="https://futureartecosystems.org/wp-content/uploads/2024/03/fae4-gif-compressed.gif"
                  width="224"
                  height="100"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </Dialog.Content>
        <Dialog.Overlay />
      </Dialog.Portal>
    </Dialog.Root>
  );
}

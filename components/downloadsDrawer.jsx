import * as Dialog from "@radix-ui/react-dialog";
import Download from "./icons/download";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "fathom-client";
const imagery = [
  "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH0A_PRE_HD.mp4",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH0B_INTRO_HD.mp4",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH01_ORG_HD.mp4",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH02_ART_HD.mp4",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/CROSSLUCID_CH03_NETWORK_HD.mp4",
];

const diagrams = [
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagrams-final-04.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagrams-final-11.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagrams-final-18.jpg",
  "https://futureartecosystems.org/wp-content/uploads/2024/03/FAE4_Diagram-18.jpg",
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
                  <SplideSlide key="video">
                    <Link
                      href={video}
                      target="_blank"
                      data-umami-event="Crosslucid video downloaded"
                      onClick={() => trackEvent("Crosslucid video downloaded")}
                    >
                      <video
                        className="w-46 aspect-video h-full bg-burgundy/20 "
                        src={video}
                        preload="metadata"
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
                    >
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
              >
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

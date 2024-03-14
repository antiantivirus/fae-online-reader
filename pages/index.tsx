import ChapterHeading from "@/components/chapterHeading";
import Footnote from "@/components/footnote";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex grow transform items-center justify-center text-center text-primary ">
        <div>
          <h1>Future Art Ecosystems</h1>
          <h2>Vol 4. Art x Public AI</h2>
        </div>
      </div>
      <div className="z-50 w-full text-primary">
        <div className="flex flex-col-reverse">
          <div className="download-drawer-imagery peer z-[60] -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-12 peer-hover:-translate-y-12">
            <div className="flex h-full w-full justify-between">
              <div>
                <h3>Postface</h3>
                <p>Brief description of chapter goes here</p>
              </div>
              <div className="aspect-video h-16 bg-black/20"></div>
            </div>
          </div>
          <div className="download-drawer-imagery peer z-50 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-12 peer-hover:-translate-y-12">
            <div className="flex h-full w-full justify-between">
              <div>
                <h3>Chapter 3: Ecosystem</h3>
                <p>Brief description of chapter goes here</p>
              </div>
              <div className="aspect-video h-16 bg-black/20"></div>
            </div>
          </div>
          <div className="download-drawer-imagery peer z-40 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-12 peer-hover:-translate-y-12">
            <div className="flex h-full w-full justify-between">
              <div>
                <h3>Chapter 2: Artist</h3>
                <p>Brief description of chapter goes here</p>
              </div>
              <div className="aspect-video h-16 bg-black/20"></div>
            </div>
          </div>
          <div className="download-drawer-imagery peer z-30 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-12 peer-hover:-translate-y-12">
            <div className="flex h-full w-full justify-between">
              <div>
                <h3>Chapter 1: Organisation</h3>
                <p>Brief description of chapter goes here</p>
              </div>
              <div className="aspect-video h-16 bg-black/20"></div>
            </div>
          </div>
          <div className="download-drawer-diagrams peer z-20 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-12 peer-hover:-translate-y-12">
            <div className="flex h-full w-full justify-between">
              <div>
                <h3>Defining Public AI</h3>
                <p>Brief description of chapter goes here</p>
              </div>
              <div className="aspect-video h-16 bg-black/20"></div>
            </div>
          </div>
          <div className="download-drawer-pdf z-10 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-12 peer-hover:-translate-y-12">
            <div className="flex h-full w-full justify-between">
              <div>
                <h3>Introduction</h3>
                <p>Brief description of chapter goes here</p>
              </div>
              <div className="aspect-video h-16 bg-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

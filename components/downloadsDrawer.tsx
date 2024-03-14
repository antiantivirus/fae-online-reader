import { Drawer } from "vaul";
import Download from "./icons/download";

export default function DownloadsDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Download />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className="fixed bottom-0 right-0 z-50 w-full text-primary">
          <div className="flex flex-col-reverse">
            <div className="download-drawer-imagery peer z-30 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
              <div className="w-46 aspect-video h-full ">
                <h3 className="text-xl">Imagery</h3>
              </div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
            </div>
            <div className="download-drawer-diagrams peer z-20 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
              <div className="w-46 aspect-video h-full ">
                <h3 className="text-xl">Diagrams</h3>
              </div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
            </div>
            <div className="download-drawer-pdf z-10 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
              <div className="w-46 aspect-video h-full ">
                <h3 className="text-xl">PDF</h3>
              </div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
            </div>
          </div>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}

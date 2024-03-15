import * as Dialog from "@radix-ui/react-dialog";
import Download from "./icons/download";

export default function DownloadsDialog() {
  return (
    <Dialog.Root>
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
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
              <div className="w-46 aspect-video h-full bg-black/30 "></div>
            </div>
            <div className="download-Dialog-diagrams peer z-20 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
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
            <div className="download-Dialog-pdf z-10 -mb-24 flex h-36 w-full gap-4 overflow-hidden rounded-lg bg-background p-2 shadow transition-all hover:-translate-y-24 peer-hover:-translate-y-24">
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
        </Dialog.Content>
        <Dialog.Overlay />
      </Dialog.Portal>
    </Dialog.Root>
  );
}

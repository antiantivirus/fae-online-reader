import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Drawer } from "vaul";

export default function Footnote({ no }: { no: string }) {
  return (
    <span>
      <sup>2</sup>
      <FootnoteContainer />
    </span>
  );
}

function FootnoteContainer() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {isDesktop ? (
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            <button className="absolute right-2 h-4 w-4 rounded-full bg-black/10 md:right-4"></button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content side="right" sideOffset={24} align="start">
              <FootnoteContents />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Trigger asChild>
            <button className="absolute right-2 h-4 w-4 rounded-full bg-red/10 md:right-4"></button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay />
            <Drawer.Content className="fixed bottom-2 right-2">
              <FootnoteContents />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </>
  );
}

function FootnoteContents() {
  return (
    <div className="block w-max max-w-[80vw] rounded-lg border bg-primary p-2 pl-8 text-white xl:max-w-[18vw]">
      <span className="absolute left-3 top-1">1</span>
      <p className="mr-8">
        Footnote info goes in here. Footnote info goes in here. Footnote info
        goes in here. Footnote info goes in here. Footnote info goes in here
      </p>
    </div>
  );
}

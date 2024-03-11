import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="absolute right-2 h-4 w-4 rounded-full bg-red/10 md:right-4"></button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content className="fixed bottom-2 right-2">
              <FootnoteContents />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
}

function FootnoteContents() {
  return (
    <div className="block w-max max-w-[80vw] border border-black bg-white p-2 lg:max-w-[16vw]">
      <p>
        Footnote info goes in here. Footnote info goes in here. Footnote info
        goes in here. Footnote info goes in here. Footnote info goes in here
      </p>
    </div>
  );
}

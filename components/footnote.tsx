import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import innerText from "react-innertext";
import FootnoteIcon from "./icons/footnote";

export default function Footnote({ info }: { info: any }) {
  const [open, setOpen] = useState(false);
  const [footnoteContents, setFootnoteContents] = useState<TrustedHTML>("");
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const id = info.props.href;
  const no = innerText(info);
  useEffect(() => {
    const footnoteContents = document.querySelector(id)?.innerHTML;
    setFootnoteContents(footnoteContents);
  }, []);
  return (
    <span>
      <sup>{no}</sup>
      <>
        {isDesktop ? (
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
              <button
                className={`absolute right-0 -mt-8 flex h-10 w-10 items-center justify-center rounded-full stroke-primary text-xs  ${open ? "fill-primary text-background" : "fill-none"}`}
              >
                <FootnoteIcon />
                <span>{no}</span>
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content side="right" sideOffset={15} align="start">
                <FootnoteContents no={no}>{footnoteContents}</FootnoteContents>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        ) : (
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                className={`absolute right-3 -mt-5 flex h-5 w-5 items-center justify-center rounded-full stroke-primary text-xs ${open ? "fill-primary text-background" : "fill-none"}`}
              >
                <FootnoteIcon />
                {no}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content className="dialog-bottom fixed bottom-2 right-2">
                <FootnoteContents no={no}>{footnoteContents}</FootnoteContents>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </>
      <slot />
    </span>
  );
}

function FootnoteContents({
  no,
  children,
}: {
  no: string;
  children: TrustedHTML;
}) {
  return (
    <div className=":max-w-[22vw] block w-max max-w-[80vw] rounded-lg border bg-primary p-2 pl-7 text-white md:max-w-prose lg:max-w-xl xl:max-w-[20vw]">
      <span className="absolute left-2.5 top-1.5 text-xs">{no}</span>
      <div
        className="text-xxs mr-8"
        dangerouslySetInnerHTML={{ __html: children }}
      ></div>
    </div>
  );
}

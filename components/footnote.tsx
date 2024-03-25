import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import innerText from "react-innertext";
import FootnoteIcon from "./icons/footnote";

export default function Footnote({ info }: { info: any }) {
  const [open, setOpen] = useState(false);
  const [footnoteContents, setFootnoteContents] = useState<
    TrustedHTML | string
  >("");
  const [adjustFootnote, setAdjustFootnote] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const id = info.props.href;
  const no = innerText(info);
  useEffect(() => {
    const prevFootnoteButton = document.getElementById(
      "footnote-button-" + (Number(no) - 1),
    );
    const currentFootnoteButton = document.getElementById(
      "footnote-button-" + no,
    );
    if (prevFootnoteButton) {
      setAdjustFootnote(overlapping(prevFootnoteButton, currentFootnoteButton));
    }
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
                id={`footnote-button-${no}`}
                className={`group absolute right-0 flex h-10 w-10 scale-100 items-center justify-center rounded-full stroke-primary text-xs ${adjustFootnote ? "-mt-5" : "-mt-12"} ${open ? "fill-primary text-background" : "fill-none"}`}
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
                id={`footnote-button-${no}`}
                className={`group absolute right-3 -mt-5 flex h-5 w-5 items-center justify-center rounded-full stroke-primary text-xs ${adjustFootnote ? "-mt-4" : "-mt-12"} ${open ? "fill-primary text-background" : "fill-none"}`}
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
  children: TrustedHTML | string;
}) {
  return (
    <div className=":max-w-[22vw] block w-max max-w-[80vw] rounded-lg bg-burgundy p-2 pl-7 text-white shadow md:max-w-prose lg:max-w-xl xl:max-w-[20vw]">
      <span className="absolute left-2.5 top-1.5 text-xxs">{no}</span>
      <div
        className="mr-8 text-xxs"
        dangerouslySetInnerHTML={{ __html: children }}
      ></div>
    </div>
  );
}

function overlapping(element1: HTMLElement, element2: HTMLElement | null) {
  if (!element2) return false;

  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  if (
    !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    )
  ) {
    return true;
  } else {
    return false;
  }
}

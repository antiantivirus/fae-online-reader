import FootnoteIcon from "../icons/footnote";
import { useEffect, useState } from "react";
import innerText from "react-innertext";

export default function Footnote({ info }: { info: any }) {
  const [adjustFootnote, setAdjustFootnote] = useState<boolean>(false);
  const id = info.props.href;
  const no = innerText(info);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const prevFootnoteButton = document.getElementById(
        "footnote-button-" + (Number(no) - 1),
      );
      const currentFootnoteButton = document.getElementById(
        "footnote-button-" + no,
      );
      if (prevFootnoteButton && currentFootnoteButton) {
        if (overlapping(prevFootnoteButton, currentFootnoteButton)) {
          console.log(currentFootnoteButton);
          currentFootnoteButton.style.marginTop = "-2px"
        }
      }
    }, 500);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  useEffect(() => {
    // Log whenever adjustFootnote changes
    console.log("adjustFootnote updated:", adjustFootnote);
  }, [adjustFootnote]);
  return (
    <span>
      <sup id={`user-content-fnref-${no}`}>
        <a
          href={`#user-content-fn-${no}`}
        >
          {no}
        </a>
      </sup>
      <a
        href={`#user-content-fn-${no}`}
        id={`footnote-button-${no}`}
        className={`group absolute -left-8 -mt-7 flex h-5 w-5 items-center justify-center rounded-full stroke-primary text-xs`}
      >
        <FootnoteIcon />
        {no}
      </a>
    </span>
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

import Link from "next/link";
import Serpentine from "./icons/serpentine";
import Copyright from "./icons/copyright";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="ml-[3rem] mr-2.5 mt-20 flex flex-wrap items-center justify-between gap-y-4 rounded-t bg-background p-5 text-xs shadow lg:mx-auto lg:max-w-box xl:max-w-boxWide">
      <Link
        className="w-8/12 md:w-4/12"
        href="https://www.serpentinegalleries.org/"
        target="_blank"
      >
        <Serpentine />
      </Link>
      {/* <div className="hidden w-10 md:block"></div> */}
      <Link
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
      >
        <Copyright />
      </Link>
      <Link href="https://www.serpentinegalleries.org/legal/" target="_blank">
        Privacy Policy
      </Link>
      <span>© Serpentine {year}</span>
    </footer>
  );
}

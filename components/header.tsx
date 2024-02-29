import Download from "./icons/download";
import Share from "./icons/share";
import Search from "./icons/search";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between bg-white p-4 pb-0">
      <div className="flex gap-2">
        <button className="font-abc rounded-2xl border border-dashed border-black/50 px-3 py-1">
          TOC
        </button>
        <button className="rounded-2xl border border-dashed border-black/50 px-3 py-1">
          <Share />
        </button>
        <button className="rounded-2xl border border-dashed border-black/50 px-3 py-1">
          <Search />
        </button>
      </div>
      <div>
        <button className="rounded-2xl border border-dashed border-black/50 px-4 py-1">
          <Download />
        </button>
      </div>
    </header>
  );
}

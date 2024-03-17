import SearchIcon from "./icons/search";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function Search() {
  const [searchinn, setSearchinn] = useState<boolean>(false);
  const [searchOpenMobile, setSearchOpenMobile] = useState<boolean>(false);

  return (
    <div className="flex grow gap-2">
      <div className="flex aspect-square h-9 w-9 items-center justify-center rounded-full bg-background shadow">
        <button
          className="md:hidden"
          onClick={() => setSearchOpenMobile(!searchOpenMobile)}
        >
          <SearchIcon />
        </button>
        <div className="hidden md:block">
          <SearchIcon />
        </div>
      </div>
      <input
        type="text"
        placeholder="Search"
        className={`fixed right-2.5 h-9 w-[calc(100vw-55px)] rounded-full bg-background px-3 text-base text-typography shadow md:static md:block md:w-full ${searchOpenMobile ? "block" : "hidden"}`}
        onChange={() => setSearchinn(true)}
      />
      <Dialog.Root modal={false} open={searchinn} onOpenChange={setSearchinn}>
        <Dialog.Portal>
          <Dialog.Content
            onPointerDownOutside={(e) => e.preventDefault()}
            className="dialog-left fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100vh-120px)] w-[300px] max-w-[85vw] flex-col rounded-tr bg-background p-5 text-primary shadow motion-reduce:transition-none"
          >
            <p>Search results</p>
          </Dialog.Content>
          <Dialog.Overlay />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

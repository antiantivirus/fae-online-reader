import SearchIcon from "./icons/search";
import { Drawer } from "vaul";
import { useState } from "react";

export default function Search() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <div className="flex grow gap-2">
      <div className="flex aspect-square h-[30px] w-[30px] items-center justify-center rounded-full bg-background shadow">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="h-[30px] w-full rounded-full bg-background px-3 text-typography shadow"
        onChange={() => setSearchOpen(true)}
      />
      <Drawer.Root
        modal={false}
        direction="left"
        open={searchOpen}
        onOpenChange={setSearchOpen}
      >
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100vh-120px)] w-[300px] max-w-[85vw] flex-col rounded-tr bg-background p-5 text-primary shadow">
            <p>Search results</p>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}

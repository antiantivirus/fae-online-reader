import SearchIcon from "./icons/search";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export default function Search() {
  const [searchOpenMobile, setSearchOpenMobile] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
          );
        } catch (e) {
          window.pagefind = { search: () => ({ results: [] }) };
        }
      }
    }
    loadPagefind();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();

    if (window.pagefind) {
      const search = await window.pagefind.debouncedSearch(query);
      setResults(search.results);
    }
  }

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
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSearch}
      />
      <Dialog.Root modal={false} open={true}>
        <Dialog.Portal>
          <Dialog.Content
            onPointerDownOutside={(e) => e.preventDefault()}
            className="dialog-left fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100vh-120px)] w-[300px] max-w-[85vw] flex-col overflow-auto rounded-tr bg-background p-5 text-primary shadow motion-reduce:transition-none"
          >
            <p>Search results</p>
            <div id="results">
              {results.map((result, index) => (
                <Result key={result.id} result={result} />
              ))}
            </div>
          </Dialog.Content>
          <Dialog.Overlay />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function Result({ result }) {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);

      const path = data.url.match(/\/([^/]+)\.html$/);
      const url = "/fae4/" + path ? path[1] : "";
      setUrl(url);
    }

    fetchData();
  }, [result]);

  if (!data) return null;

  return (
    <Link href={url}>
      <h3>{data.meta.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: data.excerpt }}></p>
      <pre>{JSON.stringify(data.sub_results, null, 2)}</pre>
    </Link>
  );
}

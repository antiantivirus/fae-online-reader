import SearchIcon from "./icons/search";
import { useState, useEffect } from "react";
import Link from "next/link";
import Back from "./icons/back";

export default function Search() {
  const [searchOpenMobile, setSearchOpenMobile] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (query !== "") setSearchOpen(true);
    else setSearchOpen(false);
  }, [query]);

  async function handleSearch(e) {
    e.preventDefault();

    if (window.pagefind) {
      setLoading(true);
      const search = await window.pagefind.debouncedSearch(query);
      setLoading(false);
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
      <div
        onPointerDownOutside={(e) => e.preventDefault()}
        className={`${searchOpen ? "search-open" : "search-closed"} search-dialog fixed bottom-0 left-0 z-50 mt-24 flex h-[calc(100vh-120px)] w-[300px] max-w-[85vw] flex-col overflow-auto rounded-tr bg-background p-5 text-primary shadow motion-reduce:transition-none`}
      >
        <div>
          <button
            onClick={() => setSearchOpen(false)}
            className="fixed right-2.5 top-5 bg-background"
          >
            <Back />
          </button>
          <h3 className="mb-5 w-10/12 text-base">
            Search results for <b>{query}</b>
          </h3>
          <div id="results">
            {/* to do: add loading state */}
            {/* {loading && <p className="animate-pulse">Loading...</p>} */}
            {results &&
              results.map((result, index) => (
                <Result key={result.id} result={result} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Result({ result }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }

    fetchData();
  }, [result]);

  if (!data) return null;

  const parseURL = (url) => {
    const path = url.replace(".html", "").split("/").at(-1);
    const correctUrl = "/fae4/" + path;
    return correctUrl;
  };

  return (
    <div>
      <h4 className="mb-1.5">{data.meta.title}</h4>
      {data.sub_results.map((sub_result, index) => (
        <Link
          className="mb-5 block"
          key={sub_result.url}
          href={parseURL(sub_result.url)}
        >
          <h4 className="mb-1.5 text-base">{sub_result.title}</h4>
          <p
            className="text-xs"
            dangerouslySetInnerHTML={{ __html: sub_result.excerpt }}
          ></p>
        </Link>
      ))}
    </div>
  );
}

import useFetchData from "./components/utils/useFetchData";
import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
export default function App() {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const [page, setPage] = useState(1);

  const { isLoading, isError, images } = useFetchData(
    `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}`
  );

  if (isLoading) {
    return <p className="">Loading</p>;
  }
  if (isError) {
    return <p className="">Error Fetching data</p>;
  }
  if (!accessKey) {
    return (
      <a
        href="https://unsplash.com/developers"
        className="bg-red-900 text-white p-4 rounded-md "
      ></a>
    );
  }
  function handlePages() {
    setPage((prevPage) => prevPage + 1);
  }
  return (
    <div className="">
      <Header />

      <SearchForm />
      <Gallery images={images} handlePages={handlePages} />
    </div>
  );
}

import useFetchData from "./components/utils/useFetchData";
import InfiniteScroll from "react-infinite-scroll-component";
import "./index.css";
import { useState } from "react";
import { Each } from "./components/utils/Each";
import Header from "./components/Header";
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
  return (
    <div className="">
      <Header />

      <form
        className="p-4 flex  justify-center bg-gray-500 mt-3 mb-3"
        action=""
      >
        <div className="  w-1/2 p-2 flex gap-2">
          <input
            className="p-2 rounded w-full"
            type="search"
            name="search"
            placeholder="Enter image name or artist name "
            id=""
          />
          <button className="bg-[royalblue] p-3 rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          setPage((prevPage) => prevPage + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 ">
          <Each
            of={images}
            render={(item, index) => (
              <img
                src={item.urls.regular}
                alt={item.alt_description}
                key={index}
                className="aspect-auto rounded-sm cursor-pointer bg-center hover:grayscale  hover:scale-105 transition-all duration-500"
              />
            )}
          />
        </div>
      </InfiniteScroll>
    </div>
  );
}

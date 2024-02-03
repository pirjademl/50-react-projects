export default function SearchForm() {
  return (
    <form className="p-4 flex  justify-center bg-gray-200 mt-3 mb-3" action="">
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
  );
}

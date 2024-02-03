import InfiniteScroll from "react-infinite-scroll-component";
import { FC } from "react";
import { Each } from "./utils/Each";
interface galleryProps {
  images: string[];
  handlePages: () => void;
}
const Gallery: FC<galleryProps> = ({ images, handlePages }) => {
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={handlePages}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 scroll-smooth ">
        <Each
          of={images}
          render={(item, index) => (
            <img
              src={item.urls.regular}
              alt={item.alt_description}
              key={index}
              className="aspect-square rounded-sm cursor-pointer bg-center hover:grayscale  hover:scale-105 transition-all duration-500"
            />
          )}
        />
      </div>
    </InfiniteScroll>
  );
};
export default Gallery;

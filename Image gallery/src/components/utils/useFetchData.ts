import { useState, useEffect } from "react";

const useFetchData = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImages((images) => [...images, ...data]);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return { isLoading, isError, images };
};
export default useFetchData;

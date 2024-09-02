import { useState, useEffect } from "react";

const localeCache = {};

export const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const requestBreedList = async () => {
      setBreedList([]);
      setStatus("loading");

      if (animal) {
        const res = await fetch(
          `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );

        const json = await res.json();
        localeCache[animal] = json.breeds || {};
        setBreedList(localeCache[animal]);
        setStatus("loaded");
      }
    };

    if (!animal) {
      setBreedList([]);
    } else if (localeCache[animal]) {
      setBreedList(localeCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  return [breedList, status];
};

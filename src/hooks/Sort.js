import { useState } from "react";

export const useSortData = (data) => {
  console.log(data, "data");
  const [sortData, setSortData] = useState();

  function sort(options) {
    console.log(options, "options");
    if (options === "ASC") {
      const sortedData = data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData([...sortedData]);
    } else if (options === "DESC") {
      const sortedData = data.sort((a, b) => {
        return b.price - a.price;
      });
      setSortData([...sortedData]);
    } else {
      return 0;
    }
  }

  return {
    sortData,
    sort,
  };
};

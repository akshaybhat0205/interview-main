import React, { useEffect, useState } from "react";
import { items } from "./dummyData";

const FilterData = () => {
  const filters = ["Sunglasses", "Bags", "Watches", "Sports"];
  const [data, setData] = useState(items);
  const [activeFilters, setActiveFilters] = useState([]);
  const handleFilterClick = (e) => {
    const category = e.target.id;
    if(activeFilters.includes(category)){
        setActiveFilters(activeFilters.filter((item) => item !== category));
    }
    else{
        setActiveFilters([...activeFilters, category]);
    }
  };

  const filterData = () => {
    if(activeFilters.length){    
        const temp = items.filter((item) => activeFilters.includes(item.category))
        setData(temp);
    }
    else{
        setData(items);
    }
  }

  useEffect(() => {
    filterData();
  }, [activeFilters]);
  return (
    <>
      <div className="flex gap-4 mb-5" >
        {filters.map((item, index) => (
          <button id={item} onClick={(e) => handleFilterClick(e)} className={activeFilters.includes(item) ? "bg-gray-300 py-2 px-4 border rounded-lg" : "bg-gray-200 py-2 px-4 border rounded-lg"}  key={index}>
            {item}
          </button>
        ))}
      </div>
      <div className=" flex gap-4 flex-wrap">
        {data &&
          data.map((item, index) => (
            <div key={index} className="border rounded-lg px-4 py-2">
              <p>{item.name}</p>
              <p>{item.category}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default FilterData;

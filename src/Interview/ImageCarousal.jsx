import React, { useState } from "react";
const data = [
  "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
  "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
  "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
];
const ImageCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


const handleNext = () => {
    let newIndex = currentIndex + 1
    if(newIndex >= data.length){
     newIndex = 0
    }
    setCurrentIndex(newIndex)
}

const handlePrevious = () => {
    let newIndex = currentIndex - 1
    if(newIndex < 0){
      newIndex = data.length - 1
    }
    setCurrentIndex(newIndex)
}

  return (
    <div className="flex gap-4 items-center">
      <button
        className="w-[200px] border border-gray-200 text-lg"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <img src={data[currentIndex]} alt="image" className="w-[300px] h-[200px] rounded-lg" />
      <button className="w-[200px] border border-gray-200 text-lg" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ImageCarousal;

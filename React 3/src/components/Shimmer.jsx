import React from "react";

const Shimmer = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="flex flex-wrap mx-36">
      {arr.map((item) => {
        return (
          
            <div key={item} className="m-4 p-4 w-[260px]  bg-orange-50 rounded-lg">
              <div className="rounded-lg mb-2 h-48 w-full  border border-solid border-gray-300 " />
              <h4 className="py-2 mb-6  border border-solid border-gray-300"></h4>
              <h4 className="py-2 mb-6  border border-solid border-gray-300"></h4>
              <h4 className=" py-2 mb-6  border border-solid border-gray-300"></h4>
            </div>
        
        );
      })}
    </div>
  );
};

export default Shimmer;

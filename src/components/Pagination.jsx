import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const {page, handlePageHandler} = useContext(AppContext)
 
  return (
    <div className="w-full flex justify-evenly  py-8 border-t-2 mt-5">
      <div>
        {page===1? (""):(<button onClick={()=>handlePageHandler(page-1)} className="py-1 px-2 rounded-md text-[24px] border-2 mx-2 hover:bg-gray-200 transition-all ease-in-out duration-200">Previous</button>)}
        {page === 6? (""):(<button onClick={()=>handlePageHandler(page+1)} className="py-1 px-2 border-2 rounded-md text-[24px] mx-2 hover:bg-gray-200 transition-all ease-in-out duration-200">Next</button>)}
      </div>
      <div className="text-[24px]">
        {`Page ${page}`}
      </div>
    </div>
  );
};

export default Pagination;

import React from "react";

function SearchShimmer() {
  return (
    <div>
      <div className="rounded-md p-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-2xl bg-slate-200 h-[50px] w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchShimmer;

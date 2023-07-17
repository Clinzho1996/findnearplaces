"use client";
import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import { searchPlaces } from "../services/GlobalApi";
import SearchShimmer from "./SearchSimmer";

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLoader(true);
  }, []);
  const handleSearch = async (keyword, latitude, longitude, radius) => {
    try {
      const results = await searchPlaces(keyword, latitude, longitude, radius);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!loader ? (
        <div className="flex h-[50px] gap-3 bg-purple-100 p-3 rounded-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            onKeyDown={(e) =>
              e.key == "Enter" &&
              handleSearch("restaurant", 40.7128, -74.006, 5000)
            }
            className="bg-transparent outline-none w-full text-[17px] placeholder-purple-400"
          />
        </div>
      ) : null}
      {loader ? [1].map((item, index) => <SearchShimmer key={index} />) : null}
    </>
  );
}

export default SearchBar;

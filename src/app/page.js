"use client";
import { useEffect } from "react";
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import { getNearbyPlaces } from "../services/GlobalApi";

export default function Home({ businessList }) {
  return (
    <>
      <div className="flex md:flex-row">
        <SideBar />
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
          <div>
            <SearchBar />
            <CategoryList />
            <BusinessList businessData={businessList} />
          </div>
          <div className="md:w-1/2 md:hidden">
            {/* Display Google Maps only on mobile */}
            Google Maps
          </div>
        </div>
        <div className="hidden md:block">
          {/* Display Google Maps only on desktop */}
          Google Maps
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Data from "../../Shared/Data";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(Data.CategoryListData);
  }, []);

  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3">
        Select Your Fav Category
      </h2>
      <div className="flex gap-4 mb-5">
        {categories &&
          categories.map((item) => (
            <div key={item.id}>
              <CategoryItem category={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryList;

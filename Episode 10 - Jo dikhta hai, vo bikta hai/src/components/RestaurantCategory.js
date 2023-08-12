import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props?.data;
  const { showItems } = props;
  const { setShowIndex } = props;
  const {dummy} = props
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className=" w-6/12 mx-auto my-4 bg-grey-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <CategoryItemList items={itemCards} dummy={dummy} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};
export default RestaurantCategory;

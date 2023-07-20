import { useState } from "react";
import restaurantList from ".././utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // State Variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;

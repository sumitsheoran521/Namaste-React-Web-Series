import { useState } from "react";
// import restaurantList from ".././utils   /mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // State Variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([
    {
      data: {
        id: "100237",
        name: "Ahuja Sweets",
        cloudinaryImageId: "2a82a8fab59d21750bad47426c50188a",
        cuisines: [
          "South Indian",
          "North Indian",
          "Desserts",
          "Beverages",
          "Chinese",
          "Chaat",
        ],
        costForTwo: 19900,
        deliveryTime: 15,
        avgRating: "3.0",
      },
    },
    {
      data: {
        id: "100238",
        name: "Grameen Kulfi",
        cloudinaryImageId: "9222019938518b7ebe87fa1c2ae382e4",
        cuisines: ["Kulfi", "Matka Kulfi", "Rabdi", "cool"],
        costForTwo: 39900,
        deliveryTime: 30,
        avgRating: "4.5",
      },
    },
  ]);

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

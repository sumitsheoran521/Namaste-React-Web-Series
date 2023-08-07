import { useState, useEffect } from "react";
import restaurantList from ".././utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1491875&lng=75.7216527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  // State Variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.3862327&lng=76.9572233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    let restaurantData = null;
    const cardsToCheck = [2, 3, 4, 5, 6];

    for (const cardIndex of cardsToCheck) {
      restaurantData =
        json?.data?.cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantData && restaurantData.length > 0) {
        break;
      }
    }

    if (!restaurantData || restaurantData.length === 0) {
      // Handle the case when no data is found in any of the cards
      console.error("No restaurant data found.");
      return;
    }

    setListOfRestaurant(restaurantData);
    setFilteredRestaurant(restaurantData);
    setOriginalData(restaurantData);
  };

  const handleReset = () => {
    setListOfRestaurant(originalData);
    setFilteredRestaurant(originalData);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are offline!!! Please check your internet connection</h1>
  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div>
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                console.log(searchText);
                setListOfRestaurant(originalData);
                const filteredRestaurants = listOfRestaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRestaurant(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link className="restaurants"
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

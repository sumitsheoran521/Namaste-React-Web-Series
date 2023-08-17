import { useState, useEffect, useContext } from "react";
import restaurantList from ".././utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGG"
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

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection
      </h1>
    );

  const {loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-20">
      <div className="filter-container flex justify-between items-center">
        <div>
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-slate-300 rounded-l-lg focus:outline-none focus:border-slate-300"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="px-4 bg-green-100 border border-slate-300 border-solid rounded-r-lg"
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
        <div className="m-4 p-4">
          <button
            className="px-4 bg-green-100 border border-slate-300 border-solid mx-1 rounded-lg"
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
          <button
            className="px-4 bg-green-100 border border-slate-300 border-solid mx-1 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="restaurants m-4"
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

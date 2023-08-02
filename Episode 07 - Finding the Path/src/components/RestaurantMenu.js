import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_IMAGE_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { title } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage.toUpperCase()}</p>
      <h1>{title}</h1>
      <ul>
        {itemCards.map((item) => {
          return (
            <div key={item.card.info.id}>
              <li>
                {item.card.info.name} - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </li>
              <img src={MENU_IMAGE_CDN_URL + item.card.info.imageId} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

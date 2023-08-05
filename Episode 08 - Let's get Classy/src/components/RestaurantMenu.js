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
  console.log(itemCards.length);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage.toUpperCase()}</p>
      <h1>{title}: {itemCards.length}</h1>
      <ul>
        {itemCards.map((item) => {
          console.log(item.card.info);
          return (
            <div key={item.card.info.id}>
              <li>
                {item.card.info.name} - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </li>
              <img
                className="item-image"
                src={
                  item.card.info.imageId
                    ? MENU_IMAGE_CDN_URL + item.card.info.imageId
                    : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637"
                }
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;


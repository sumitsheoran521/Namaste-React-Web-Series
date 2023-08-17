import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const deliveryTime = resData.info.sla.deliveryTime;

  return (
    <div
      className={`p-2 w-72 h-80 border border-l-gray-100 ${
        avgRating >= 4 ? "hover:bg-green-200" : "hover:bg-orange-200"
      }`}
    >
      <img className="" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3 className="font-bold text-lg">{name}</h3>
      {cuisines && cuisines.length > 0 ? (
        <h4 className="font-light text-xs">{cuisines.join(", ")}</h4>
      ) : (
        <h4>Cuisine information not available</h4>
      )}
      <h4 className="star-rating-container text-sm">
        <span className="star-logo text-sm">★</span> {avgRating}
      </h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const deliveryTime = resData.info.sla.deliveryTime;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      {cuisines && cuisines.length > 0 ? (
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
      ) : (
        <h4>Cuisine information not available</h4>
      )}
      <h4 className="star-rating-container">
        <span className="star-logo">★</span> {avgRating}
      </h4>
      <h4>₹{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

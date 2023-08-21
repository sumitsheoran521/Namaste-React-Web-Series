import { CDN_URL, MENU_IMAGE_CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <p className="font-semibold">{item?.card?.info?.name}</p>
              <p className="font-normal text-sm">
                {" "}
                ₹
                {(item?.card?.info?.price
                  ? item?.card?.info?.price
                  : item?.card?.info?.defaultPrice) / 100}
              </p>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 h-full">
            <img
              src={
                item?.card?.info?.imageId
                  ? CDN_URL + item?.card?.info?.imageId
                  : "https://www.ira-sme.net/wp-content/themes/consultix/images/no-image-found-360x260.png"
              }
              className="object-cover w-full "
            />
            <div className="w-full h-3 flex justify-center items-center">
              <button className="w-3/4 p-2 rounded-lg bg-white text-green-500 font-bold text-sm shadow-lg -translate-y-3">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

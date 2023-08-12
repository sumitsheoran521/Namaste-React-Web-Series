import { MENU_IMAGE_CDN_URL } from "../utils/constants";
const CategoryItemList = (props) => {
  console.log(props.dummy);
  const { items } = props;
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between items-center"
          >
            <div className="w-9/12">
              <div className="py-2">
                <div className="">{item?.card?.info?.name}</div>
                <div>
                  ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </div>
              </div>
              <p className="text-xs text-gray-500">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 p-2 flex flex-col justify-center items-center">
              <img
                src={
                  item?.card?.info?.imageId
                    ? MENU_IMAGE_CDN_URL + item?.card?.info?.imageId
                    : "https://www.racearchive.org.uk/wp-content/themes/dizy/assets/images/no-image/No-Image-Found-400x264.png"
                }
                className="w-[330px] h-[110px] object-fill rounded-lg"
              />
              <button className=" px-3 py-1 w-9/12 rounded-lg font-bold text-green-400 bg-white shadow-lg -translate-y-6">
                ADD
              </button>
              <div className="absolute items-center "></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryItemList;

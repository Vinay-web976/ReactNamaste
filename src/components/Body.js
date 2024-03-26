import { useState } from "react";
import { RES_LIST } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState(RES_LIST);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (item) => item.data.avgRating > 4
            );

            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

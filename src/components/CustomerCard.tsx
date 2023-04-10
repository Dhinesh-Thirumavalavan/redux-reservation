import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../Redux/Features/CustomerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const [addFood, setAddFood] = useState("");
  const dispatch = useDispatch();

  const handleAddFood = () => {
    dispatch(addFoodToCustomer({ id, food:addFood }));
    setAddFood("");
  };

  return (
    <div className="customer-food-card-container">
        <h5>{name}</h5>
      <div className="customer-foods-container"> 
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={addFood}
            onChange={(e) => {
              setAddFood(e.target.value);
            }}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

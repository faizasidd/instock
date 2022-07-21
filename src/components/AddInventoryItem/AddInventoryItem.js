import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../utils/useForm";

import "./AddInventoryItem.scss";
import InventoryForm from "../InventoryForm/InventoryForm";

const AddInventoryItem = () => {
  const [inventory, setInventory] = useState({
    itemName: "",
    description: "",
    category: "",
  });

  const { handleChange, values, errors, handleSubmit } = useForm();

 
  const handleInputChange = (e) => {
    e.preventDefault();
    handleChange(e);
    setInventory({ ...inventory, [e.target.name]: e.target.value });
    console.log(inventory);
  };

  const submitAddedItem = (e) => {
    e.preventDefault();
    handleSubmit(e, inventory);
    axios
      .post(
        "http://localhost:8080/inventories",
        {
          itemName: inventory.itemName,
          description: inventory.description,
          category: inventory.category,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="edit-warehouse">
      <div className="edit-warehouse__title-container">
        {/* <img src={arrowBack} /> */}
        <h1 className="edit-warehouse__title">Add Inventory</h1>
      </div>
      <div className="edit-warehouse__form-container">
        <div>
          <InventoryForm
            handleInputChange={handleInputChange}
            inventory={inventory}
            setInventory={setInventory}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="edit-warehouse__button-container">
        <button className="edit-warehouse__button">Cancel</button>
        <button
          // disabled={!isEnabled}
          // onClick={(e) => submitAddedItem(e)}
          onClick={submitAddedItem}
          type="submit"
          value="submit"
          className="edit-warehouse__button--save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddInventoryItem;

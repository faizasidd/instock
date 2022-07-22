import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Placeholder from "./components/Placeholder/Placeholder";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryForm from "./components/InventoryForm/InventoryForm";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Placeholder} />
        {/* <Route path="/warehouses" component={Placeholder} /> */}
        <Route path="/warehouse/edit/:warehouseId" component={EditWarehouse} />
        <Route path="/warehouse/add" component={AddWarehouse} />
        <Route path="/warehouse/:warehouseId" component={Placeholder} />
        <Route path="/inventory/edit/:inventoryId" component={Placeholder} />
        <Route path="/inventory/add" component={AddInventoryItem} />
        <Route path="/inventory/:inventoryId" component={Placeholder} />
        <Route path="/inventory" component={Placeholder} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

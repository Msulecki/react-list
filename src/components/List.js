import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { SortItems } from "./SortItems";
import { RenderList } from "./RenderList";
import data from "../data/data.json";
import "../styles/List.scss";

function List() {
  const [sort, setSort] = useState([]);
  const [items, setItems] = useState(data);
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState(
    new Date().toLocaleDateString().split(".").reverse().join("-")
  );
  const [checkedItem, setCheckedItem] = useState(null);

  const handleSort = (by) => {
    sort.includes(by)
      ? setSort(sort.filter((item) => item !== by))
      : setSort([...sort, by]);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { date: newDate, name: newName }]);
    setNewName("");
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <main>
      <AddItem
        handleAddItem={handleAddItem}
        newName={newName}
        setNewName={setNewName}
        setNewDate={setNewDate}
        newDate={newDate}
      />
      <SortItems sort={sort} handleSort={handleSort} />
      <RenderList
        items={items}
        sort={sort}
        checkedItem={checkedItem}
        setCheckedItem={setCheckedItem}
        handleDeleteItem={handleDeleteItem}
      />
    </main>
  );
}
export default List;

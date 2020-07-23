import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { SortItems } from "./SortItems";
import sortBy from "lodash.sortby";
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

      <ul>
        {sortBy(items, sort).map((item, index) => (
          <li key={index} className={checkedItem === item ? "active" : ""}>
            <input
              type="radio"
              onChange={() => setCheckedItem(item)}
              checked={checkedItem === item}
            />
            <span>{item.name}</span>
            <span>{new Date(item.date).toLocaleDateString()}</span>
            <button onClick={() => handleDeleteItem(index)}>
              <span role="img" aria-label="delete">
                ❌
              </span>
            </button>
          </li>
        ))}
        {items.length === 0 && <li>Sorry, no results ¯\_(ツ)_/¯</li>}
      </ul>
    </main>
  );
}
export default List;

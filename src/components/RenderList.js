import React from "react";
import sortBy from "lodash.sortby";

export const RenderList = (props) => {
  const { items, sort, checkedItem, setCheckedItem, handleDeleteItem } = props;
  return (
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
  );
};

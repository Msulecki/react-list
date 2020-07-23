import React from "react";

export const SortItems = (props) => {
  const { sort, handleSort } = props;
  return (
    <div className="sort">
      Sort by:&emsp;
      <button
        className={`${sort.includes("name") ? "active" : ""}`}
        onClick={() => handleSort("name")}
      >
        Name
      </button>
      <button
        className={`${sort.includes("date") ? "active" : ""}`}
        onClick={() => handleSort("date")}
      >
        Date
      </button>
      List is
      {sort.length ? ` sorted by ${sort.join(" and then by ")}.` : " unsorted."}
    </div>
  );
};

import React from "react";

export const AddItem = (props) => {
  const { handleAddItem, newName, setNewName, newDate, setNewDate } = props;
  return (
    <form onSubmit={handleAddItem}>
      <input
        type="text"
        placeholder="Name"
        maxLength={16}
        onChange={(e) =>
          setNewName(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        value={newName}
        required
      />
      <input
        type="date"
        onChange={(e) => setNewDate(e.target.value)}
        value={newDate}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};

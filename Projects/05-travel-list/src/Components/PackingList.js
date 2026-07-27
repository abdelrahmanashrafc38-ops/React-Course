import { useState } from "react";
export default function PackingList({ items, onDelete, onPacked, onClear }) {
  const [sortType, setSortType] = useState("input");
  let sortedItems;
  if (sortType === "input") {
    sortedItems = items;
  }
  if (sortType === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortType === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDelete={onDelete}
              onPacked={onPacked}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status </option>
        </select>
        <button onClick={onClear}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDelete, onPacked }) {
  return (
    <li>
      <input
        type="Checkbox"
        value={item.packed}
        onChange={() => onPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

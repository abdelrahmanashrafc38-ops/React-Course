import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, SetDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      alert("You must enter an item");
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setQuantity(1);
    SetDescription("");
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity((c) => (c = +e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => {
          return (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          //console.log(e.target.value);
          SetDescription((d) => (d = e.target.value));
        }}
      />
      <button>Add</button>
    </form>
  );
}

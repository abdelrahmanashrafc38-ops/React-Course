import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form() {
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
    setQuantity(1);
    SetDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          //console.log(e.target.value);
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
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.length ? (
          initialItems.map((item) => {
            return <Item item={item} key={item.id} />;
          })
        ) : (
          <h2>pick some stuffs for your trip</h2>
        )}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X item on your list,and you already packed X item </em>
    </footer>
  );
}
export default App;

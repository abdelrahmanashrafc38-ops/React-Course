import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [addFriend, setAddFriend] = useState(false);

  function handleAddFriendToggle() {
    setAddFriend((x) => !x);
    setSelectedFriend(null);
  }
  function handleOnSelect(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  function handleOnSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleOnSelect}
          selectedFriendID={selectedFriend?.id}
        />
        <FormAddFriend
          setFriends={setFriends}
          addFriend={addFriend}
          handleAddFriendToggle={handleAddFriendToggle}
        />
        <Button onClick={handleAddFriendToggle}>
          {addFriend ? "Close" : "Add new friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleOnSplitBill={handleOnSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelectFriend, selectedFriendID }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selectedFriendID={selectedFriendID}
            key={friend.id}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </ul>
    </>
  );
}
function Friend({ friend, onSelectFriend, selectedFriendID }) {
  let selected = friend.id === selectedFriendID;

  return (
    <li className={selected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
          : friend.balance > 0
            ? `${friend.name} owes you ${friend.balance}€`
            : `You and ${friend.name} are even`}
      </p>
      <Button onClick={() => onSelectFriend(friend)}>
        {selected ? "close" : "select"}
      </Button>
    </li>
  );
}
function FormAddFriend({ setFriends, addFriend, handleAddFriendToggle }) {
  const [name, setNAme] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}?u=${id}`, balance: 0 };

    setFriends((friends) => [...friends, newFriend]);
    handleAddFriendToggle();

    setNAme("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      {addFriend && (
        <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
          <label>👬🏻Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setNAme(e.target.value)}
          />
          <label>🖼️Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button>Add</Button>
        </form>
      )}
    </>
  );
}

function FormSplitBill({ selectedFriend, handleOnSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  let friendExpense = billValue !== "" ? billValue - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !userExpense) return;
    handleOnSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);
    // setBillValue("");
    // setUserExpense("");
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
        <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
        <label>💰 Bill Value</label>
        <input
          type="text"
          value={billValue}
          onChange={(e) =>
            +e.target.value >= 0 ? setBillValue(+e.target.value) : billValue
          }
        />
        <label>🧍🏻 Your Expense</label>
        <input
          type="text"
          value={userExpense}
          onChange={(e) =>
            +e.target.value > billValue
              ? userExpense
              : setUserExpense(+e.target.value)
          }
        />
        <label>👬🏻 {selectedFriend.name}'s Expense</label>
        <input type="text" disabled={true} value={friendExpense} />
        <label>🤑 Who is paying the bill?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
      </form>
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default App;

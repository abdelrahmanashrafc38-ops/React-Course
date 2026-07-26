import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length ? (
        <>
          <p>
            Authentic Italian cusine. 6 creative dishes to choose from. All from
            our stone oven , all organic , all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
              return <Pizza pizzaObj={pizza} key={index} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later:) </p>
      )}
    </main>
  );
}
function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hours >= openHour && hours <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Oreder closeHour={closeHour} />
      ) : (
        <Closed openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}
function Oreder({ closeHour }) {
  return (
    <div className="order">
      <p>We're open untill {closeHour}:00. Come visit us or order online :)</p>
      <button className="btn">Order</button>
    </div>
  );
}
function Closed({ openHour, closeHour }) {
  return (
    <p>
      Sorry, we're closed:( We're open from {openHour} am to {closeHour} am
    </p>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Sold Out".toUpperCase() : `$${pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

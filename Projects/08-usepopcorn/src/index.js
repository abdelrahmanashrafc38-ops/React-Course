import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";

function Test() {
  const [movieRate, setMovieRate] = useState(3);
  return (
    <div>
      <StarRating
        maxRating={5}
        color="Blue"
        onSetRate={setMovieRate}
        defaultRating={movieRate}
      />
      <p>This movie is rated {movieRate} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Excelent"]}
      defaultRating={3}
    />
    <StarRating maxRating={4} size={36} color="red" className="star-rating" />
    <Test />
    {/* <App /> */}
  </React.StrictMode>,
);

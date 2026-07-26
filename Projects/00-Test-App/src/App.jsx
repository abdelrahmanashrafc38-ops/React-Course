import { useEffect, useState } from "react";

export default function App() {
  const [Advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <h1>{Advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message counter={counter} />
    </>
  );
}

function Message(props) {
  return (
    <>
      <p>
        Number of advices: <strong>{props.counter}</strong> Advice(s) have been
        read so far.
      </p>
    </>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState({ netAmount: 0, rate1: 0, rate2: 0 });
  return (
    <>
      <Form bill={bill} setBill={setBill} />
      <TotalBill bill={bill} setBill={setBill} /> {/* This part is right */}
    </>
  );
}
function Form({ setBill }) {
  const [netAmount, setNetAmount] = useState("");
  const [rate1, setRate1] = useState(0);
  const [rate2, setRate2] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    if (!netAmount) {
      alert("you must insert any bill amount greater than 0");
    }
    const newBill = { netAmount, rate1, rate2 };
    setBill(newBill);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <BillAmount netAmount={netAmount} onChangeNetAmount={setNetAmount}>
        <span>How much was the bill? </span>
      </BillAmount>
      <br />
      <TipPerc rate={rate1} onChangeRate={setRate1}>
        <span>How did you like the service? </span>
      </TipPerc>
      <br />
      <TipPerc rate={rate2} onChangeRate={setRate2}>
        <span>How did your friend like the service? </span>
      </TipPerc>
    </form>
  );
}
function BillAmount({ netAmount, onChangeNetAmount, children }) {
  return (
    <>
      {children}
      <input
        type="text"
        placeholder="Bill value"
        value={netAmount}
        onChange={(e) => onChangeNetAmount(+e.target.value)}
      />
    </>
  );
}

function TipPerc({ rate, onChangeRate, children }) {
  return (
    <>
      {children}
      <select value={rate} onChange={(e) => onChangeRate(+e.target.value)}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={10}>it was good(10%)</option>
        <option value={20}>Absolutely amazing(20%)</option>
      </select>
    </>
  );
}
//------------------------------------------------------------------------
function TotalBill({ bill, setBill }) {
  return (
    <>
      <Display bill={bill} />
      <Button billAmount={bill.netAmount} setBill={setBill} />
    </>
  );
}

function Display({ bill }) {
  if (bill.netAmount) {
    let totalTip =
      (bill.netAmount / 2) * (bill.rate1 / 100) +
      (bill.netAmount / 2) * (bill.rate2 / 100);
    let totalAmount = bill.netAmount + totalTip;
    return (
      <>
        <h2>
          <span>
            You pay ${totalAmount} (${bill.netAmount} + ${totalTip})
          </span>
        </h2>
      </>
    );
  }
}
function Button({ billAmount, setBill }) {
  return (
    <>
      {billAmount ? (
        <button
          onChange={() =>
            setBill((bill) => (bill = { netAmount: 0, rate1: 0, rate2: 0 }))
          }
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}
export default App;

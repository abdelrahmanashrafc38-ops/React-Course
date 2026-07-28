import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [netAmount, setNetAmount] = useState(0);
  const [rate1, setRate1] = useState(0);
  const [rate2, setRate2] = useState(0);
  let totalTip =
    (netAmount / 2) * (rate1 / 100) + (netAmount / 2) * (rate2 / 100);
  let totalAmount = netAmount + totalTip;
  function handleReset() {
    setNetAmount(0);
    setRate1(0);
    setRate2(0);
  }
  return (
    <>
      <BillAmount netAmount={netAmount} onChange={setNetAmount}>
        <label>How much was the bill? </label>
      </BillAmount>
      <br />
      <Percentage rate={rate1} onChange={setRate1}>
        <label>How did you like the service? </label>
      </Percentage>
      <br />
      <Percentage rate={rate2} onChange={setRate2}>
        <label>How did your friend like the service? </label>
      </Percentage>
      {netAmount ? (
        <Output netAmount={netAmount} onClick={handleReset}>
          <h2>
            You pay ${totalAmount}(${netAmount} + ${totalTip} tip)
          </h2>
        </Output>
      ) : (
        ""
      )}
    </>
  );
}
function BillAmount({ children, netAmount, onChange }) {
  return (
    <>
      {children}
      <input
        type="text"
        placeholder="Bill value"
        value={netAmount}
        onChange={(e) => onChange(+e.target.value)}
      />
    </>
  );
}
function Percentage({ children, rate, onChange }) {
  return (
    <>
      {children}
      <select value={rate} onChange={(e) => onChange(+e.target.value)}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={10}>it was good(10%)</option>
        <option value={20}>Absolutely amazing(20%)</option>
      </select>
    </>
  );
}
function Output({ children, netAmount, onClick }) {
  return (
    <>
      <div>{children}</div>
      <div>
        <button onClick={onClick}>Reset</button>
      </div>
    </>
  );
}

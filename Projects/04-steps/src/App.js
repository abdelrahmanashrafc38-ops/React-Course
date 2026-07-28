import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [Message, setMessage] = useState(messages[0]);
  //---------------------------------------------
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < messages.length) {
      setStep((s) => s + 1);
    }
  }

  function handleLearnHow(step) {
    let confirmed;
    if (step === 1) {
      confirmed = window.confirm("Go to jonas's React Course?");
      if (confirmed)
        window.open(
          "https://www.udemy.com/course/the-ultimate-react-course/?utm_campaign=Search_DSA_Alpha_Prof_la.EN_cc.ROW-English_Subs&utm_source=google&utm_medium=paid-search&portfolio=ROW-English&utm_audience=mx&utm_tactic=nb&utm_term=_._ag_185568237484_._ad_769543047528_._kw_&utm_content=g&funnel=&test=&gad_source=1&gad_campaignid=22894903170&gbraid=0AAAAADROdO37Swa2Wq9WyKrEhbYjv3j-7&gclid=CjwKCAjwpqHTBhAcEiwAj2AfuormwlC2YE_lHTrcVvg050K2ZLoid1sQg0MT7ouQ1UCBGcWt13-zeBoCvOEQAvD_BwE",
        );
    }
    if (step === 2) {
      confirmed = window.confirm("Go to Indeed Egypt to apply for a job?");
      if (confirmed) window.open("https://eg.indeed.com/");
    }
    if (step === 3) {
      confirmed = window.confirm("Wanna invest your income in the best way?");
      if (confirmed)
        window.open(
          "https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/?utm_campaign=Search_DSA_Alpha_Prof_la.EN_cc.ROW-English_Subs&utm_source=google&utm_medium=paid-search&portfolio=ROW-English&utm_audience=mx&utm_tactic=nb&utm_term=_._ag_185568237244_._ad_769543047510_._kw_&utm_content=g&funnel=&test=&gad_source=1&gad_campaignid=22894903170&gbraid=0AAAAADROdO37Swa2Wq9WyKrEhbYjv3j-7&gclid=CjwKCAjwpqHTBhAcEiwAj2AfuqEAHi_ydtQ9AGYgfnWtNvRGlavXsiBkD_06o1YJM8aZTluEK72K0RoC-YYQAvD_BwE&couponCode=KEEPLEARNING",
        );
    }
  }
  //--------------------------------------------
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor={"#a7a2a2"}
                txtColor={"#fff"}
                onClick={() => handleLearnHow(step)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              txtColor={"#fff"}
              onClick={handlePrevious}
            >
              <span>👈🏻</span> Previous
            </Button>
            <Button bgColor={"#7950f2"} txtColor={"#fff"} onClick={handleNext}>
              Next <span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ txtColor, bgColor, onClick, children }) {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: txtColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

export default App;

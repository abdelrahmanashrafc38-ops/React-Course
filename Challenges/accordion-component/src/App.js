import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(0);
  function handleAccordion(num) {
    setIsOpen((isOpen) => (isOpen ? (isOpen = 0) : (isOpen = num)));
  }
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          num={i + 1}
          title={el.title}
          isOpenG={isOpen}
          key={el.title}
          onClick={handleAccordion}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        num={23}
        title={"Test 1"}
        isOpenG={isOpen}
        onClick={handleAccordion}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, isOpenG, onClick }) {
  let isOpenItem = isOpenG === num;

  return (
    <div
      className={`item ${isOpenItem ? "open" : ""}`}
      onClick={() => onClick(num)}
    >
      <p className="number">{num < 10 ? `0${num}` : `${num}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpenItem ? "-" : "+"}</p>
      {isOpenItem && <p className="content-box">{children}</p>}
    </div>
  );
}

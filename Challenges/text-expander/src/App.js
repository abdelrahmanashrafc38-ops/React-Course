import { useState } from "react";
export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWordsInput={20}
        expandButtonTextInput="Show text"
        collapseButtonTextInput="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expandedInput={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWordsInput = 10,
  expandButtonTextInput = "Show more",
  collapseButtonTextInput = "Show less",
  buttonColor = "#0313ff",
  className = "",
  expandedInput = false,
}) {
  const [expanded, setExpanded] = useState(expandedInput);
  // const [colapsedNumWords, setCollapsedNumWords] = useState(10);
  const colapsedNumWords = expanded ? children.length : collapsedNumWordsInput;
  const collapsedTextStyle = {
    fontSize: 24 + "px",
    fontWeight: "bold",
  };
  const buttonStyle = {
    color: buttonColor,
    fontSize: 24 + "px",
    cursor: "pointer",
  };

  const collapsedText = children
    .split(" ")
    .slice(0, colapsedNumWords)
    .join(" ");
  const expandButtonText = expandButtonTextInput;
  const collapseButtonText = collapseButtonTextInput;

  return (
    <div className={className}>
      <span style={collapsedTextStyle}>{collapsedText}</span>
      <span
        role="button"
        style={buttonStyle}
        onClick={() => setExpanded((s) => !s)}
      >
        {expanded ? " " + collapseButtonText : "..." + expandButtonText}
      </span>
    </div>
  );
}

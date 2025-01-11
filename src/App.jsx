import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");
    let suggestedWord = "";

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        suggestedWord = `Did you mean: ${customDictionary[lowerCaseWord]}?`;
        break;
      }
    }

    setSuggestion(suggestedWord);
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.trim() === "") {
      setSuggestion("");
      return;
    }

    checkSpelling(inputText);
  };

  return (
    <div className="p-10">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        onChange={handleInputChange}
        value={text}
        placeholder="Enter text..."
        rows={8}
        cols={50}
      ></textarea>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;

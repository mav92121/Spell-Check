import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");
    const newSuggestions = [];

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        newSuggestions.push(
          `Did you mean: ${customDictionary[lowerCaseWord]}?`
        );
      }
    }

    setSuggestions(newSuggestions);
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.trim() === "") {
      setSuggestions([]);
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
      <div>
        {suggestions.map((suggestion, index) => (
          <p key={index}>{suggestion}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

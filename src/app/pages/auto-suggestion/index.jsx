import { useState, useEffect, useRef } from "react";
import "./style.css";

const datas = [
  "Apple",
  "Banana",
  "Orange",
  "Guava",
  "Pineapple",
  "Lemon",
  "Pomegranate",
  "Watermelon",
  "Papaya",
];

const AutoSuggestion = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);

  useEffect(() => {
    if (inputValue) {
      const filteredSuggestions = datas.filter((data) =>
        data.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSuggestionList(filteredSuggestions);
    } else {
      setSuggestionList([]);
    }
  }, [inputValue]);

  const suggestionClickHandler = (suggestion) => {
    setInputValue(suggestion);
  };

  return (
    <div className="autosuggestion-container">
      <h1>Auto Suggestion</h1>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search fruits"
        className="search-input"
      />
      {suggestionList.length > 0 && (
        <div className="suggestion-list">
          {suggestionList.map((suggestion, index) => (
            <span
              className="suggestion-item"
              key={index}
              onClick={() => suggestionClickHandler(suggestion)}
            >
              {suggestion}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestion;

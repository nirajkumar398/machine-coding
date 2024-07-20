import { useCallback, useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import "./style.css";

const fetchRecipeSuggestions = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

const highlightText = (text, query) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="highlighted-text">{part}</span>
    ) : (
      part
    )
  );
};

const AutoSuggestion = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const inputRef = useRef(null);

  const fetchSuggestions = async (searchQuery) => {
    setIsLoading(true);
    const fetchedSuggestions = await fetchRecipeSuggestions(searchQuery);
    setSuggestions(fetchedSuggestions);
    setIsLoading(false);
  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);

  useEffect(() => {
    if (!isSuggestionVisible) return;
    if (query.length > 1) {
      debouncedFetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query, isSuggestionVisible, debouncedFetchSuggestions]);

  useEffect(() => {
    if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
      inputRef.current.focus();
    }
  }, [highlightedIndex, suggestions]);

  const handleSuggestionSelect = (suggestion) => {
    setQuery(suggestion);
    setIsSuggestionVisible(false);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSuggestionSelect(suggestions[highlightedIndex].name);
        }
        break;
      case "Escape":
        setIsSuggestionVisible(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="autosuggestion-container">
      <h1>Recipe Search</h1>
      <input
        ref={inputRef}
        placeholder="Search for a recipe"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsSuggestionVisible(true);
        }}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      {isSuggestionVisible && suggestions.length > 0 && (
        <div className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <span
              key={suggestion.id}
              className={`suggestion-item ${index === highlightedIndex ? 'highlighted' : ''}`}
              onClick={() => handleSuggestionSelect(suggestion.name)}
            >
              {highlightText(suggestion.name, query)}
            </span>
          ))}
        </div>
      )}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default AutoSuggestion;

import React, { useState, useEffect } from "react";

const Search = ({ onSearch, data }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (input) {
      const newSuggestions = [];
      Object.keys(data.restaurants).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.cosmetics).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.cold_drinks).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.chocolates).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.tea_coffee).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.flavoured_drinks).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.dairy_products).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.water).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.cereals).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.snacks).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.biscuits).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.noodles_pasta).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.iced_tea).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.shampoos).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.toothpaste).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.body_care).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.sanitary_napkins).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });
      Object.keys(data.babycare).forEach((key) => {
        if (key.toLowerCase().includes(input.toLowerCase())) {
          newSuggestions.push(key);
        }
      });

      
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [input, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
      <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        <div className="mt-2">
          {suggestions.length > 0 && (
            <div className="dropdown bg-white border border-gray-300 rounded-b-md overflow-hidden">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="dropdown-row px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

export default Search;

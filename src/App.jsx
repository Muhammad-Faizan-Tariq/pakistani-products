import React, { useState } from "react";
import Search from "./Search";
import data from "./data";
import "./index.css";

const App = () => {
  const [searchResult, setSearchResult] = useState({
    message: "",
    alternatives: [],
  });

  const handleSearch = (query) => {
    let found = false;
    let alternatives = [];

    // Search logic remains the same...

    // Search in restaurants
    if (data.restaurants[query]) {
      found = true;
      alternatives = data.restaurants[query];
    }

    // Search in cosmetics
    if (data.cosmetics[query]) {
      found = true;
      alternatives = data.cosmetics[query];
    }

    if (data.cold_drinks[query]) {
      found = true;
      alternatives = data.cold_drinks[query];
    }

    if (data.chocolates[query]) {
      found = true;
      alternatives = data.chocolates[query];
    }

    if (data.juices[query]) {
      found = true;
      alternatives = data.juices[query];
    }

    if (data.flavoured_drinks[query]) {
      found = true;
      alternatives = data.flavoured_drinks[query];
    }

    if (data.dairy_products[query]) {
      found = true;
      alternatives = data.dairy_products[query];
    }

    if (data.water[query]) {
      found = true;
      alternatives = data.water[query];
    }

    if (data.cereals[query]) {
      found = true;
      alternatives = data.cereals[query];
    }

    if (data.snacks[query]) {
      found = true;
      alternatives = data.snacks[query];
    }

    if (data.biscuits[query]) {
      found = true;
      alternatives = data.biscuits[query];
    }

    if (data.noodles_pasta[query]) {
      found = true;
      alternatives = data.noodles_pasta[query];
    }

    if (data.iced_tea[query]) {
      found = true;
      alternatives = data.iced_tea[query];
    }

    if (data.shampoos[query]) {
      found = true;
      alternatives = data.shampoos[query];
    }

    if (data.toothpaste[query]) {
      found = true;
      alternatives = data.toothpaste[query];
    }

    if (data.body_care[query]) {
      found = true;
      alternatives = data.body_care[query];
    }

    if (data.sanitary_napkins[query]) {
      found = true;
      alternatives = data.sanitary_napkins[query];
    }

    if (data.babycare[query]) {
      found = true;
      alternatives = data.babycare[query];
    }

    if (data.detergents[query]) {
      found = true;
      alternatives = data.detergents[query];
    }

    // Set search result based on search
    if (found) {
      setSearchResult({
        message: "This product belongs to Israel. and here are the alternates",
        alternatives,
      });
    } else {
      setSearchResult({
        message: "This item does not belong to Israel.",
        alternatives: [],
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <Search onSearch={handleSearch} data={data} />

      <p className="mt-4 text-center text-gray-600">{searchResult.message}</p>

      {searchResult.alternatives.length > 0 && (
        <ul className="mt-4">
          {searchResult.alternatives.map((alt, index) => (
            <li
              key={index}
              className="bg-white border border-gray-300 rounded p-2 mb-2"
            >
              {alt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

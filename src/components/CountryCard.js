import React from "react";

const CountryCard = ({ country }) => {
  const { name, emoji, capital, currency, languages, continent } = country;

  return (
    <div className="border p-4 mb-4 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-2xl">{emoji}</div>
      </div>
      <div className="mt-2">Capital: {capital}</div>
      <div>Currency: {currency}</div>
      <div>Languages: {languages.map((lang) => lang.name).join(", ")}</div>
      <div>Continent: {continent.name}</div>
    </div>
  );
};

export default CountryCard;

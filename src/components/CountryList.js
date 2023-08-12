import React from "react";

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map((country) => (
        <div
          key={country.code}
          className="bg-cardColor rounded-lg shadow-md p-4 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => onCountryClick(country)}
        >
          <div className="mb-2 text-xl text-primaryColor">{country.emoji}</div>
          <div className="font-semibold text-lg ext-primaryColor">
            {country.name}
          </div>
          <div className="ext-primaryColor mt-2">
            Capital: {country.capital}
          </div>
          <div className="ext-primaryColor">Currency: {country.currency}</div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = ({ country, onClose }) => {
  return (
    <div className="bg-cardColor rounded-lg shadow-lg p-4 transition-opacity duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="mb-2 text-xl">{country.emoji}</div>
        <button
          onClick={onClose}
          className="ext-primaryColor hover:text-gray-900 focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="font-semibold text-lg">{country.name}</div>
      <div className="ext-primaryColor mt-2">
        Continent: {country.continent.name}
      </div>
      <div className="ext-primaryColor">
        Languages: {country.languages.map((lang) => lang.name).join(", ")}
      </div>
    </div>
  );
};

export default CountryDetail;

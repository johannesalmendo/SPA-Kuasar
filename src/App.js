import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleCloseDetail = () => {
    setSelectedCountry(null);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = data
    ? data.countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bg-bgColor container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-primaryColor">
        Country List
      </h1>
      <div className="flex">
        <div className="w-full pr-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="w-full p-2 pr-10 rounded-md border focus:outline-none bg-white"
            />
            <div className="absolute top-0 right-0 mt-2 mr-3 text-primaryColor">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {filteredCountries.length === 0 && <p>No countries found.</p>}
          <CountryList
            countries={filteredCountries}
            onCountryClick={handleCountryClick}
          />
        </div>
        <div className="w-2/3 pl-4">
          {selectedCountry && (
            <CountryDetail
              country={selectedCountry}
              onClose={handleCloseDetail}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default AppWrapper;

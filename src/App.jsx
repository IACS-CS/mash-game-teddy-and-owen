import { useState } from "react";
import "./App.css";

const App = () => {
  // State for navigation
  const [currentPage, setCurrentPage] = useState("cities");

  // State for cities and team names
  const [cities, setCities] = useState(["", "", "", ""]);
  const [teamNames, setTeamNames] = useState(["", "", "", ""]);

  // Function to change pages
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Action to update a specific city
  const changeCity = (index, value) => {
    const updatedCities = [...cities];
    updatedCities[index] = value;
    setCities(updatedCities);
  };

  // Action to update a specific team name
  const changeTeamName = (index, value) => {
    const updatedTeamNames = [...teamNames];
    updatedTeamNames[index] = value;
    setTeamNames(updatedTeamNames);
  };

  // Render the Cities page
  const renderCitiesPage = () => {
    return (
      <div>
        <h1>Step 1: Name 4 Cities</h1>
        {cities.map((city, index) => (
          <div key={index}>
            <label>
              City {index + 1}:
              <input
                value={city}
                onChange={(event) => changeCity(index, event.target.value)}
              />
            </label>
          </div>
        ))}
        <button onClick={() => goToPage("teamNames")}>Next: Team Names</button>
      </div>
    );
  };

  // Render the Team Names page
  const renderTeamNamesPage = () => {
    return (
      <div>
        <h1>Step 2: Name 4 Teams</h1>
        {teamNames.map((teamName, index) => (
          <div key={index}>
            <label>
              Team {index + 1}:
              <input
                value={teamName}
                onChange={(event) => changeTeamName(index, event.target.value)}
              />
            </label>
          </div>
        ))}
        <button onClick={() => goToPage("cities")}>Back to Cities</button>
        <button onClick={() => goToPage("summary")}>Next: Summary</button>
      </div>
    );
  };

  // Render the Summary page
  const renderSummaryPage = () => {
    return (
      <div>
        <h1>Summary</h1>
        <h2>Cities:</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
        <h2>Teams:</h2>
        <ul>
          {teamNames.map((teamName, index) => (
            <li key={index}>{teamName}</li>
          ))}
        </ul>
        <button onClick={() => goToPage("cities")}>Edit Cities</button>
        <button onClick={() => goToPage("teamNames")}>Edit Team Names</button>
      </div>
    );
  };

  // Conditionally render the current page
  let pageContent;
  if (currentPage === "cities") {
    pageContent = renderCitiesPage();
  } else if (currentPage === "teamNames") {
    pageContent = renderTeamNamesPage();
  } else if (currentPage === "summary") {
    pageContent = renderSummaryPage();
  }

  return <main>{pageContent}</main>;
};

export default App;
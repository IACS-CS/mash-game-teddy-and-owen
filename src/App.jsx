import { useState } from "react";
import "./App.css";

const App = () => {
  // State for navigation
  const [currentPage, setCurrentPage] = useState("cities");

  // States for each dataset
  const [cities, setCities] = useState(["", "", "", ""]);
  const [teamNames, setTeamNames] = useState(["", "", "", ""]);
  const [crimes, setCrimes] = useState(["", "", "", ""]);
  const [names, setNames] = useState(["", "", "", ""]);
  const [retiredPlayers, setRetiredPlayers] = useState(["", "", "", ""]);
  const [colleges, setColleges] = useState(["", "", "", ""]);
  const [wins, setWins] = useState([0, 0, 0, 0]);

  // Function to change pages
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Helper function to update state for lists
  const updateList = (list, setList, index, value) => {
    const updatedList = [...list];
    updatedList[index] = value;
    setList(updatedList);
  };

  // Render pages
  const renderCitiesPage = () => (
    <div>
      <h1>Step 1: Name 4 Cities</h1>
      {cities.map((city, index) => (
        <div key={index}>
          <label>
            City {index + 1}:
            <input
              value={city}
              onChange={(event) => updateList(cities, setCities, index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => goToPage("teamNames")}>Next: Team Names</button>
    </div>
  );

  const renderTeamNamesPage = () => (
    <div>
      <h1>Step 2: Name 4 Teams</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>
          <label>
            Team {index + 1}:
            <input
              value={teamName}
              onChange={(event) => updateList(teamNames, setTeamNames, index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => goToPage("cities")}>Back to Cities</button>
      <button onClick={() => goToPage("crimes")}>Next: Crimes</button>
    </div>
  );

  const renderCrimesPage = () => (
    <div>
      <h1>Step 3: List Crimes</h1>
      {crimes.map((crime, index) => (
        <div key={index}>
          <label>
            Crime {index + 1}:
            <input
              value={crime}
              onChange={(event) => updateList(crimes, setCrimes, index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => goToPage("teamNames")}>Back to Team Names</button>
      <button onClick={() => goToPage("names")}>Next: Names</button>
    </div>
  );

  const renderNamesPage = () => (
    <div>
      <h1>Step 4: Add Player Names</h1>
      {names.map((name, index) => (
        <div key={index}>
          <label>
            Player Name {index + 1}:
            <input
              value={name}
              onChange={(event) => updateList(names, setNames, index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => goToPage("crimes")}>Back to Crimes</button>
      <button onClick={() => goToPage("retiredPlayers")}>Next: Retired Players</button>
    </div>
  );

  const renderRetiredPlayersPage = () => (
    <div>
      <h1>Step 5: Add Retired Players</h1>
      {retiredPlayers.map((player, index) => (
        <div key={index}>
          <label>
            Retired Player {index + 1}:
            <input
              value={player}
              onChange={(event) => updateList(retiredPlayers, setRetiredPlayers, index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => goToPage("names")}>Back to Names</button>
      <button onClick={() => goToPage("colleges")}>Next: Colleges</button>
    </div>
  );

  const renderCollegesPage = () => (
    <div>
      <h1>Step 6: Add Colleges</h1>
      {colleges.map((college, index) => (
        <div key={index}>
          <label>
            College {index + 1}:
            <input
              value={college}
              onChange={(event) => updateList(colleges, setColleges, index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => goToPage("retiredPlayers")}>Back to Retired Players</button>
      <button onClick={() => goToPage("wins")}>Next: Wins</button>
    </div>
  );

  const renderWinsPage = () => (
    <div>
      <h1>Step 7: Choose 4 Numbers</h1>
      {wins.map((win, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              onClick={() => updateList(wins, setWins, index, Math.max(0, win - 1))}
              disabled={win <= 0}
            >
              -
            </button>
            <span>{win}</span>
            <button
              type="button"
              onClick={() => updateList(wins, setWins, index, Math.min(17, win + 1))}
              disabled={win >= 17}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => goToPage("colleges")}>Back to Colleges</button>
      <button onClick={() => goToPage("summary")}>Next: Summary</button>
    </div>
  );
  
  const renderSummaryPage = () => (
    <div>
      <h1>Summary</h1>
      <h2>Cities:</h2>
      <ul>{cities.map((city, index) => (<li key={index}>{city}</li>))}</ul>

      <h2>Team Names:</h2>
      <ul>{teamNames.map((team, index) => (<li key={index}>{team}</li>))}</ul>

      <h2>Crimes:</h2>
      <ul>{crimes.map((crime, index) => (<li key={index}>{crime}</li>))}</ul>

      <h2>Names:</h2>
      <ul>{names.map((name, index) => (<li key={index}>{name}</li>))}</ul>

      <h2>Retired Players:</h2>
      <ul>{retiredPlayers.map((player, index) => (<li key={index}>{player}</li>))}</ul>

      <h2>Colleges:</h2>
      <ul>{colleges.map((college, index) => (<li key={index}>{college}</li>))}</ul>

      <h2>Wins:</h2>
      <ul>{wins.map((win, index) => (<li key={index}>{win}</li>))}</ul>

      <button onClick={() => goToPage("wins")}>Edit Wins</button>
      <button onClick={() => goToPage("picker")}>Next: Picker</button>
    </div>
  ); 

  const renderPickerPage = () => (

  );

  // Conditionally render the current page
  let pageContent;
  if (currentPage === "cities") pageContent = renderCitiesPage();
  else if (currentPage === "teamNames") pageContent = renderTeamNamesPage();
  else if (currentPage === "crimes") pageContent = renderCrimesPage();
  else if (currentPage === "names") pageContent = renderNamesPage();
  else if (currentPage === "retiredPlayers") pageContent = renderRetiredPlayersPage();
  else if (currentPage === "colleges") pageContent = renderCollegesPage();
  else if (currentPage === "wins") pageContent = renderWinsPage();
  else if (currentPage === "summary") pageContent = renderSummaryPage();
  else if (currentPage === "picker") pageContent = renderPickerPage();

  return <div classname="App">{pageContent}</div>;
};


export default App;
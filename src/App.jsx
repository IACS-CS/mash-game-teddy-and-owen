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

  // Helper function to update state for lists, Help from AI was used to create this function
  const updateList = (list, setList, index, value) => {
    const updatedList = [...list];
    updatedList[index] = value;
    setList(updatedList);
  };

  // Render pages Ai was used to create this initial function, following ones were modified based on this one with small amounts of help from AI
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
      <button onClick={() => goToPage("teamNames")}>Next: Nouns</button>
    </div>
  );

  const renderTeamNamesPage = () => (
    <div>
      <h1>Step 2: Name 4 Pluarl Nouns(Animals, Objects, Ect.)</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>
          <label>
            Word {index + 1}:
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
      <h1>Step 3: List 4 Crimes</h1>
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
      <button onClick={() => goToPage("teamNames")}>Back to Nouns</button>
      <button onClick={() => goToPage("names")}>Next: Names</button>
    </div>
  );

  const renderNamesPage = () => (
    <div>
      <h1>Step 4: Add 4 Names</h1>
      {names.map((name, index) => (
        <div key={index}>
          <label>
            Name {index + 1}:
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
      <h1>Step 5: Name 4 Retired NFL Players</h1>
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
      <button onClick={() => goToPage("wins")}>Next: Numbers</button>
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

      <button onClick={() => goToPage("wins")}>Edit Answers</button>
      <button onClick={() => goToPage("picker")}>Next: Picker</button>
    </div>
  ); 
  const [finalSelections, setFinalSelections] = useState(["", "", "", "", "", "", ""]);


  const handleClick = (row, col) => {
    const updatedSelections = [...finalSelections];
    if (updatedSelections[row] === "") {
      updatedSelections[row] = shuffledMatrix[row][col];
      setFinalSelections(updatedSelections);
    }
  };

  
  const categories = [
    "City",
    "Team Name",
    "Starting QB Crime",
    "Backup QB Name",
    "Coach Name",
    "College",
    "Number of Wins",
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array]; // Create a copy to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledCities = shuffleArray(cities);
  const shuffledTeamNames = shuffleArray(teamNames);
  const shuffledCrimes = shuffleArray(crimes);
  const shuffledNames = shuffleArray(names);
  const shuffledRetiredPlayers = shuffleArray(retiredPlayers);
  const shuffledColleges = shuffleArray(colleges);
  const shuffledWins = shuffleArray(wins);

  const shuffledMatrix = [
    shuffledCities,
    shuffledTeamNames,
    shuffledCrimes,
    shuffledNames,
    shuffledRetiredPlayers,
    shuffledColleges,
    shuffledWins,
  ]
  
  const pickerPage = () => (
    <div>
      {/* Display the final selections list */}
      <h2>Final Selections:</h2>
      <ul>
        {finalSelections.map((selection, index) => (
          <li key={index}>
            {categories[index]}: {selection || "Not selected"}
          </li>
        ))}
      </ul>
  
      {/* Category Picker */}
      {categories.map((category, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Category Label */}
          <div style={{ marginRight: "10px", fontWeight: "bold", width: "150px" }}>
            {category}:
          </div>
  
          {/* Row of Buttons */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(4, 1fr)`, gap: "10px" }}>
            {Array.from({ length: 4 }).map((_, colIndex) => {
              const currentValue = shuffledMatrix[rowIndex][colIndex];
              const isSelected = finalSelections[rowIndex] === currentValue;
  
              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    padding: "10px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(rowIndex, colIndex)} // Handle selection
                  disabled={isSelected} // Disable button if already selected
                >
                  {/* Button text */}
                  {`${category} ${colIndex + 1}`}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          const allSelected = finalSelections.every((selection) => selection);
          if (allSelected) goToPage("announcement");
          else alert("Please make a selection for all categories before proceeding.");
        }}
      >
        Submit Selections
      </button>
    </div>
  );

  const renderAnnouncementPage = () => {
    const [city, teamName, crime, name, retiredPlayer, college, win] = finalSelections;

    let seasonSummary = "";
    if (win < 5) {
      seasonSummary = `The ${city}, ${teamName} have finished last in their division in their first year in the NFL. They did not make the playoffs, and their season ends here.`;
    } else if (win >= 4 && win <= 8) {
      seasonSummary = `The ${city}, ${teamName} have finished 3rd in their division in their first year in the NFL. They did not make the playoffs, and their season ends here.`;
    } else if (win >= 9 && win <= 12) {
      seasonSummary = `The ${city}, ${teamName} have finished 2nd in their division in their first year in the NFL and make the playoffs as a wildcard team.`;
    } else if (win >= 13) {
      seasonSummary = `The ${city}, ${teamName} have won their division in their first year in the NFL and make the playoffs as a division champion.`;
    }

    return (
      <div>
        <h1>Team Season Overview</h1>
        <p>
          Hello, I am Roger Goodell. I am pleased to announce our new team from <strong>{city}</strong>, the <strong>{teamName}</strong>. This team consists of some very talented players who are all ready to shoot for the championship. Sadly, their original starting quarterback committed <strong>{crime}</strong>, so he was sent to jail. Therefore, their new starting quarterback will be <strong>{name}</strong>, who just won a national championship with <strong>{college}</strong>. The head coach of this wonderful team will be the former NFL player <strong>{retiredPlayer}</strong>.
        </p>
        <p>
          "Scott Hanson here bringing you some season records. After their first season in the NFL, the <strong>{city} {teamName}</strong> won a shocking <strong>{win}</strong> games. {seasonSummary}"
        </p>
        <button onClick={() => goToPage("picker")}>Back to Picker</button>
      </div>
    );
  };
  

  //render the current page
  let pageContent;
  if (currentPage === "cities") pageContent = renderCitiesPage();
  else if (currentPage === "teamNames") pageContent = renderTeamNamesPage();
  else if (currentPage === "crimes") pageContent = renderCrimesPage();
  else if (currentPage === "names") pageContent = renderNamesPage();
  else if (currentPage === "retiredPlayers") pageContent = renderRetiredPlayersPage();
  else if (currentPage === "colleges") pageContent = renderCollegesPage();
  else if (currentPage === "wins") pageContent = renderWinsPage();
  else if (currentPage === "summary") pageContent = renderSummaryPage();
  else if (currentPage === "picker") pageContent = pickerPage();
  else if (currentPage === "announcement") pageContent = renderAnnouncementPage();

  return <div classname="App">{pageContent}</div>;
};


export default App;
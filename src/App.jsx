import { useState } from "react";
import "./App.css";

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!

  // Example state and setter

  // The console.log statement below will show you each time
  // the App renders.


  // actions  

  // render parts of our output...

  const [cities, setCities] = useState(["", "", "", ""]);
  const [teamName, setTeamName] = useState(["", "", "", ""]);
  const [crime, setCrime] = useState(["", "", "", ""]);
  const [names, setName] = useState(["", "", "", ""]);
  const [retiredPlayer, setRetiredPlayer] = useState(["", "", "", ""]);
  const [college, setCollege] = useState(["", "", "", ""]);
  const [wins, setWins] = useState([0, 0, 0, 0]);

  // actions
  const changeCities = (idx, value) => {
    // copy the list
    let newCities = [...cities];
    // set the value at index
    newCities[idx] = value;
    // update the list
    setCities(newCities);
  };

  const renderCities = () => {
    return cities.map((cities, idx) => (
      <div key={idx}>
        City {idx + 1}:
        <input
          value={cities}
          onChange={(event) => {
            changeCities(idx, event.target.value);
          }}
        />
      </div>
    ));
  };

  return (
  <main>
    <h1>Nfl Team Creator</h1>
    Name 4 Cities:
    {renderCities()}
    <hr />
      <h2>Debug:</h2>
      {JSON.stringify(cities)}
  </main>
  );
};

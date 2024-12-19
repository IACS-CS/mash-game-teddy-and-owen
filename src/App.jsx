import { useState } from "react";
import "./App.css";

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!
  
  // Example state and setter
  const [toggle,setToggle] = useState(true);

  // The console.log statement below will show you each time
  // the App renders.
  console.log('Rendering app!','toggle is',toggle);


  // actions  

  // render parts of our output...
  const renderLightSwitch = () => {
    
  }

  const [cities, setCities] = useState(["", "", "", ""]);

  // actions
  const changeOption = (idx, value) => {
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
    <h1>Nfl Team Guesser</h1>
    Name 4 Cities:
    {renderCities()}
  </main>
  );
};

export default App;
import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./components/AddEntry/AddEntry";
import ChartTracker from "./components/ChartTracker/ChartTracker";


function App() {
  const [entries, setEntries] = useState([{ weight: 135, date: "03-01-2022" }, { weight: 134, date: "03-28-2022" }]);

  function addNewEntry(entry){
     let temp = [...entries, entry]
     setEntries(temp);
  }



  return (
    <div>
      <DisplayEntries entries={entries} />
      <AddEntryForm setEntries={addNewEntry}/>
      <ChartTracker entries={entries}/>
    </div>
  );
}

export default App;

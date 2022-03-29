import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./components/AddEntry/AddEntry";
import ChartTracker from "./components/ChartTracker/ChartTracker";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([
    { weight: 135, date: "2022-03-01" },
    { weight: 134, date: "2022-03-02" },
  ]);

  function addNewEntry(entry) {
    let temp = [...entries, entry];
    setEntries(temp);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{ margin: "1em" }}>
          Weight <small className="text-muted">Tracker</small>
        </h3>
        <div className="col-md-6">
          <div className="border-box">
            <DisplayEntries entries={entries} />
          </div>
          <div className="border-box">
            <AddEntryForm setEntries={addNewEntry} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="border-box">
            <ChartTracker entries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

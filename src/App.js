import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./components/AddEntry/AddEntry";

function App() {
  const [entries, setEntries] = useState([{ weight: 135, date: "03-01-2022" }, { weight: 134, date: "03-28-2022" }]);

  return (
    <div>
      <DisplayEntries entries={entries} />
      <AddEntryForm />
    </div>
  );
}

export default App;

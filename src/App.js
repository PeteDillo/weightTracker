import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
function App() {
  const [entries, setEntries] = useState([{ weight: 175, date: "03-28-2022" }]);

  return (
    <div>
      <DisplayEntries entries={entries}/>
    </div>
  );
}

export default App;

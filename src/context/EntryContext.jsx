import { createContext, useContext, useState } from "react";

const EntryContext = createContext();
export default function EntryProvider({ children }) {
  const allEntries = JSON.parse(localStorage.getItem("allentries")) || [];
  const [entries, setEntries] = useState(allEntries);

  const addEntry = (entry) => {
    const updatedEntries = [entry, ...entries];
    localStorage.setItem("allentries", JSON.stringify(updatedEntries));
    setEntries(JSON.parse(localStorage.getItem("allentries")) || []);
  };

  return (
    <EntryContext.Provider value={{ entries, addEntry }}>
      {children}
    </EntryContext.Provider>
  );
}

export function useEntry() {
  return useContext(EntryContext);
}

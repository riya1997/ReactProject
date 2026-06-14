import { createContext, useContext, useState, useEffect } from "react";

const EntryContext = createContext();
export default function EntryProvider({ children }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("allentries")) || [];

    setEntries(storedEntries);
  }, []);

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

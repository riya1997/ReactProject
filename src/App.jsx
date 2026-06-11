import Header from "./components/Header";
import EntryProvider from "./context/EntryContext";
const App = () => {
  return (
    <EntryProvider>
      <Header />
    </EntryProvider>
  );
};

export default App;

import DiaryList from "./components/DiaryList";
import Header from "./components/Header";
import EntryProvider from "./context/EntryContext";
const App = () => {
  return (
    <EntryProvider>
      <Header />
      <DiaryList />
    </EntryProvider>
  );
};

export default App;

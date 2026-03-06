import { Routes, Route, } from "react-router-dom";
import UsersFromAPI from "./pages/UsersFromAPI";
import Root from "./pages/Root";
import "./App.css";
import WordleGame from "./pages/Wordle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="/employee-list" element={<UsersFromAPI />} />
        <Route path="/wordle-game" element={<WordleGame />} />
      </Routes>
    </>
  );
}

export default App;

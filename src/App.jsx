import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

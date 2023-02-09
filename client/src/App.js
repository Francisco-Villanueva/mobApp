import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormMob from "./components/form/FormMob";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Moblist from "./components/mobsList/Moblist";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/form" element={<FormMob />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mobList" element={<Moblist />} />
      </Routes>
    </div>
  );
}

export default App;

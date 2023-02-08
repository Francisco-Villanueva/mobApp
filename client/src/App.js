import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormMob from "./components/form/FormMob";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<FormMob />} />
      </Routes>
    </div>
  );
}

export default App;

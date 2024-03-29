import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormMob from "./components/form/FormMob";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Moblist from "./components/mobsList/Moblist";
import NavB from "./components/Navbar/NavB";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteMob,
  editMob,
  getMobInfo,
  getMobs,
  getModels,
} from "./redux/actions";
import MobCode from "./components/Codigo/MobCode";
function App() {
  const dispatch = useDispatch();
  const mobsLista = useSelector((s) => s.allMobs);
  const modelLista = useSelector((s) => s.allModels);
  const mobToEdit = useSelector((s) => s.mobToEdit);
  const getMobFunc = dispatch(getMobInfo);
  useEffect(() => {
    dispatch(getMobs());
    dispatch(getModels());
  }, [mobsLista]);

  // VER CÓMO MIERDA SE HACE PARA QUE ACTUALICE EN "VIVO" LOS VALORES DE mobLista

  return (
    <div className="App">
      <NavB />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mobList"
            element={
              <Moblist
                mobs={mobsLista}
                models={modelLista}
                mobToEdit={mobToEdit}
                mobFunc={getMobFunc}
              />
            }
          />
          <Route
            path="/mobcode"
            element={<MobCode mobs={mobsLista} models={modelLista} />}
          />
          <Route path="/ediMob/:id" element={<FormMob editing={true} />} />
        </Routes>
      </div>

      {/* <p className="developer">
        Created by <b>Villanueva, Francisco</b>{" "}
      </p> */}
    </div>
  );
}

export default App;

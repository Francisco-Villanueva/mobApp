import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormMob from "./components/form/FormMob";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Moblist from "./components/mobsList/Moblist";
import NavB from "./components/Navbar/NavB";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { deleteMob, getMobs } from "./redux/actions";
function App() {
  const dispatch = useDispatch()
  const mobsLista = useSelector(s=>s.allMobs)


  dispatch(getMobs())
  useEffect(()=>{
    console.log('LISTA DE MOBS: ', mobsLista)
  },[4])

    // VER CÓMO MIERDA SE HACE PARA QUE ACTUALICE EN "VIVO" LOS VALORES DE mobLista

  return (
    <div className="App">
      <NavB/>
      <Routes>
        <Route  path="/form" element={<FormMob />} />
        <Route  path="/" element={<Home />} />
        <Route  path="/mobList" element={<Moblist  mobs={mobsLista}/>} />
      </Routes>
    </div>
  );
}

export default App;

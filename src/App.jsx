import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import SingleCharacter from "./pages/SingleCharacter";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import PreferitiPage from "./pages/PreferitiPage";
import axios from "axios";

function App() {
  // Gestione personaggi
  const [personaggi, setPersonaggi] = useState([]);

  useEffect(() => {
    fetchPersonaggi();
  }, []);

  function fetchPersonaggi() {
    axios.get(`https://rickandmortyapi.com/api/character/`).then((resp) => {
      setPersonaggi(resp.data.results);
    });
  }

  // Gestione dei preferiti
  const [preferiti, setPreferiti] = useState([1]);

  function isPreferito(idPersonaggio) {
    return preferiti.includes(idPersonaggio);
  }

  function addPreferito(idPersonaggio) {
    setPreferiti((current) => [...current, idPersonaggio]);
  }

  function removePreferito(idPersonaggio) {
    setPreferiti((current) => current.filter((id) => id !== idPersonaggio));
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/personaggi"
              element={
                <Characters
                  personaggi={personaggi}
                  isPreferito={isPreferito}
                  addPreferito={addPreferito}
                  removePreferito={removePreferito}
                />
              }
            />
            <Route
              path="/personaggi/:id"
              element={
                <SingleCharacter
                  isPreferito={isPreferito}
                  addPreferito={addPreferito}
                  removePreferito={removePreferito}
                />
              }
            />
            <Route
              path="/personaggi/preferiti"
              element={
                <PreferitiPage
                  personaggi={personaggi}
                  preferiti={preferiti}
                  isPreferito={isPreferito}
                  addPreferito={addPreferito}
                  removePreferito={removePreferito}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

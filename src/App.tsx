// import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TraitList, { Trait } from "./components/TraitList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";

function App() {
  const traits: Trait[] = [
    { name: "Agile", value: 1 },
    { name: "Brawny", value: 2, current: 1 },
    { name: "Dexterous", value: 2 },
    { name: "Quick", value: 1 },
    { name: "Tenacious", value: 3, current: 2 },
  ];
  return (
    <>
      <h2>
        Test
        <FontAwesomeIcon icon={faMasksTheater} />
      </h2>
      <TraitList traits={traits} />
    </>
  );
}

export default App;

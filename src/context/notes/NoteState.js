import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state1 = {
    name: "Brijisha",
    surname: "Doshi",
  };
  const [state, setState] = useState(state1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Ronak",
        surname: "Joshi",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

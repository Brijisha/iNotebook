// import React, { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62c2aeccf0ed2c70694a84de",
      user: "62bed383469b182655a8b120",
      title: "MORNING",
      description: "WAKEUP EARLY IN THE MORNING",
      tag: "General",
      date: "2022-07-04T09:11:40.575Z",
      __v: 0,
    },
    {
      _id: "62c2aedef0ed2c70694a84e0",
      user: "62bed383469b182655a8b120",
      title: "BRINAK",
      description: "SLEEP EARLY IN THE NIGHT",
      tag: "BR",
      date: "2022-07-04T09:11:58.054Z",
      __v: 0,
    },
  ];
  /*const state1 = {
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
  };*/

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

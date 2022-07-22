// import React, { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZWQzODM0NjliMTgyNjU1YThiMTIwIn0sImlhdCI6MTY1ODE1OTc0NH0.NJujqG9oVqje0gmZWMWHZz6LnFzL_1uwmc1jRMjE7RQ";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //--->  1)  Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    // Logic to add in client
    console.log("Adding new note");
    const note = {
      _id: "9",
      user: "62bed383469b182655a8b120",
      title: title,
      description: description,
      tag: tag,
      date: "2022-07-04T09:11:58.054Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //--->  2)  Get  all Notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //--->  3)  Add a Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id} `, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting the note with id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //--->  4)  Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id} `, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    let updatedNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < updatedNotes.length; index++) {
      const element = updatedNotes[index];
      if (element._id === id) {
        updatedNotes[index].title = title;
        updatedNotes[index].description = description;
        updatedNotes[index].tag = tag;
        break;
      }
    }
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

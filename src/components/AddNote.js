import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3 className="text-center fw-bold ">Add Note from here</h3>
      <div className="container-xxxl  py-5 px-2 m-1 fs-5 row">
        <div className=" col-8 md-col-8 sm-col-12 addnote">
          <form className="w-100">
            <div className="my-3">
              <label htmlFor="title" className="mb-2">
                Enter Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter your title (atleast 5 characters)"
                value={note.title}
                onChange={onChange}
                minLength={5}
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="mb-2">
                Enter Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Enter your description (atleast 5 characters)"
                value={note.description}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="mb-2">
                Enter Tag:
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                placeholder="Enter your tag"
                value={note.tag}
                onChange={onChange}
              />
            </div>

            <button
              disabled={note.title.length < 5 || note.description.length < 5}
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleClick}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;

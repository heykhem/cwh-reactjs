import { useState, useContext, useEffect, useRef } from "react";

import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, editNote, getNotes } = context;
  const ref = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);

  const updateNote = async (currentNote) => {
    ref.current.click();
    console.log(currentNote);
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Updating note:", note);
  };

  return (
    <>
      <AddNote />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      {/* MODAL */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="etitle">Title</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="etitle"
                  aria-describedby="etitle"
                  placeholder="Enter Title"
                  name="etitle"
                  autoComplete="off"
                  onChange={onChange}
                  value={note.etitle}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="edescription">Description</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="edescription"
                  placeholder="Password"
                  name="edescription"
                  autoComplete="off"
                  onChange={onChange}
                  value={note.edescription}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="etag">Tags</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="etag"
                  placeholder="Tags"
                  name="etag"
                  autoComplete="off"
                  onChange={onChange}
                  value={note.etag}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="my-3">
        <h1>Your Notes</h1>
        <div className="row">
          {notes.map((note) => (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Notes;

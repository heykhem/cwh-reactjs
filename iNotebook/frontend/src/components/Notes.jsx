import { useState, useContext, useEffect, useRef } from "react";

import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, editNote, getNotes } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
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
    setNote({
      id: currentNote._id,
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
    editNote(
      note.id,
      note.etitle,
      note.edescription,
      note.etag === "" ? "general" : note.etag,
    );
    refClose.current.click();
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
                  minLength={5}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="edescription">Description</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="edescription"
                  name="edescription"
                  autoComplete="off"
                  onChange={onChange}
                  value={note.edescription}
                  minLength={5}
                  required
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
                ref={refClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
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
          <div className="container text-muted">
            {notes.length === 0 && "No note to display"}
          </div>
          {notes.map((note) => (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Notes;

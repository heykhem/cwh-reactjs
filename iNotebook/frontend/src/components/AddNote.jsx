import { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.title,
      note.description,
      note.tag === "" ? "general" : note.tag,
    );
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <section>
      <h1 className="fs-2">Add a note</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control mt-2"
            id="title"
            aria-describedby="title"
            name="title"
            autoComplete="off"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control mt-2"
            id="description"
            name="description"
            autoComplete="off"
            onChange={onChange}
            value={note.description}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control mt-2"
            id="tag"
            name="tag"
            autoComplete="off"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={note.title.length < 5 || note.description.length < 5}
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </section>
  );
}

export default AddNote;

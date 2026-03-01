import { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <AddNote />
      <section className="my-3">
        <h1>Your Notes</h1>
        <div className="row">
          {notes.map((note) => (
            <NoteItem key={note._id} note={note} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Notes;

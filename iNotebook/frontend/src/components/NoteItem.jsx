import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

function NoteItem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="mt-2"> </div>
          <div className="d-flex gap-3 mt-3 align-items-center justify-content-between">
            <span className="badge bg-dark p-2 d-flex align-items-center justify-content-between text-capitalize ">
              {note.tag}
            </span>

            <div className="d-flex gap-2">
              <i
                className="fa-regular fa-pen-to-square"
                onClick={() => updateNote(note)}
              ></i>
              <i
                className="fa-regular fa-trash-can"
                onClick={() => {
                  deleteNote(note._id);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

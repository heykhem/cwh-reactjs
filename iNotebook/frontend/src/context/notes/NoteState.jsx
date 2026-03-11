import { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const { showAlert } = props;

  const host = "http://localhost:5000";

  // eslint-ignore-next-line
  const [notes, setNotes] = useState([]);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (Array.isArray(data)) {
      setNotes(data);
    } else {
      setNotes([]);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    //eslint-disable-next-line
    const json = await response.json();

    let note = {
      title: title,
      description: description,
      tag: tag,
    };
    setNotes(notes.concat(note));
    showAlert(": Note Added Successfully", "success");
  };

  // Delete a Note
  const deleteNote = async (noteId) => {
    // TOD0 API CALL
    const url = `${host}/api/notes/deletenote/${noteId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    //eslint-disable-next-line
    const json = await response.json();

    const newNotes = notes.filter((note) => note._id !== noteId);
    setNotes(newNotes);
    showAlert(": Note Deleted Successfully", "success");
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //eslint-disable-next-line
    const json = await response.json();

    setNotes((prev) =>
      prev.map((n) => (n._id === id ? { ...n, title, description, tag } : n)),
    );
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

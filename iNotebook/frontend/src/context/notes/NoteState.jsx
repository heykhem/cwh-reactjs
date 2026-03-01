import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [
    {
      _id: "69a2c7dc5a3a486b7479a5cc",
      user: "69a1222ea0f7a68b1a758ea4",
      title: "Anthropic is good",
      description: "claude code is good",
      tag: "general",
      date: "2026-02-28T10:47:56.684Z",
      __v: 0,
    },
    {
      _id: "69a2c8055a3a486b7479a5ce",
      user: "69a1222ea0f7a68b1a758ea4",
      title: "Google is king for search",
      description: "google is goood",
      tag: "general",
      date: "2026-02-28T10:48:37.258Z",
      __v: 0,
    },
    {
      _id: "69a2c8055a3a486b7479a5cz",
      user: "69a1222ea0f7a68b1a758ea4",
      title: "Google is king for search",
      description: "google is goood",
      tag: "general",
      date: "2026-02-28T10:48:37.258Z",
      __v: 0,
    },
    {
      _id: "69a2c8055a3a489b7479a5ce",
      user: "69a1222ea0f7a68b1a758ea4",
      title: "Google is king for search",
      description: "google is goood",
      tag: "general",
      date: "2026-02-28T10:48:37.258Z",
      __v: 0,
    },
    {
      _id: "69a2c8056a3a486b7479a5ce",
      user: "69a1222ea0f7a68b1a758ea4",
      title: "Google is king for search",
      description: "google is goood",
      tag: "general",
      date: "2026-02-28T10:48:37.258Z",
      __v: 0,
    },
  ];

  // eslint-ignore-next-line
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhMTIyMmVhMGY3YTY4YjFhNzU4ZWE0In0sImlhdCI6MTc3MjE3Nzc1M30.HSf8wGDy5f262Q-kdcoyYeF3n_2Fzv4QBRqncZEO5rI",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhMTIyMmVhMGY3YTY4YjFhNzU4ZWE0In0sImlhdCI6MTc3MjE3Nzc1M30.HSf8wGDy5f262Q-kdcoyYeF3n_2Fzv4QBRqncZEO5rI",
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
  };

  // Delete a Note
  const deleteNote = async (noteId) => {
    // TOD0 API CALL
    const url = `${host}/api/notes/deletenote/${noteId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhMTIyMmVhMGY3YTY4YjFhNzU4ZWE0In0sImlhdCI6MTc3MjE3Nzc1M30.HSf8wGDy5f262Q-kdcoyYeF3n_2Fzv4QBRqncZEO5rI",
      },
    });
    //eslint-disable-next-line
    const json = await response.json();

    const newNotes = notes.filter((note) => note._id !== noteId);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhMTIyMmVhMGY3YTY4YjFhNzU4ZWE0In0sImlhdCI6MTc3MjE3Nzc1M30.HSf8wGDy5f262Q-kdcoyYeF3n_2Fzv4QBRqncZEO5rI",
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

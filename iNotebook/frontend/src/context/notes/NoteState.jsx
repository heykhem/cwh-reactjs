import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
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
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

import { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  }, []);

  console.log(a);

  return <div>This is About {a.state.name}</div>;
}

export default About;

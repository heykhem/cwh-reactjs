import { useOutletContext } from "react-router-dom";

import Notes from "./Notes";

function Home() {
  const { alert, showAlert } = useOutletContext();
  return (
    <div>
      <Notes alert={alert} showAlert={showAlert} />
    </div>
  );
}

export default Home;

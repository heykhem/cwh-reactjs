import { useOutletContext } from "react-router-dom";
import TextForm from "./components/TextForm";

export default function Home() {
  const { mode, showAlert } = useOutletContext();
  return (
    <TextForm
      showAlert={showAlert}
      heading="Enter the text to analyze below"
      mode={mode}
    />
  );
}

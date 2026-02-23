import { useOutletContext } from "react-router-dom";
import News from "./News";

export default function NewsWithContext(props) {
  const { setProgress } = useOutletContext();
  return <News {...props} setProgress={setProgress} />;
}

import { useOutletContext } from "react-router-dom";
import News from "./News";

export default function NewsWithContext(props) {
  const { setProgress } = useOutletContext();
  const apiKey = import.meta.env.VITE_NEWS_API;
  return <News {...props} apiKey={apiKey} setProgress={setProgress} />;
}

import { useState } from "react";
export default function TextForm(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase().trim();
    setText(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase().trim();
    setText(newText);
  };

  const handleCopy = () => {
    document.querySelector("#myBox").select();
    navigator.clipboard.writeText(text).then(() => setShowAlert(true));

    setTimeout(() => setShowAlert(false), 1000);
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCleanText = () => {
    let newText = text.trim();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container row mt-5">
        <div className="mb-3 parent flex-2 col-8 overflow-hidden">
          <h1
            className={`fs-3 mb-4 text-${props.mode === "light" ? "black" : "white"}`}
          >
            {props.heading}
          </h1>
          <textarea
            name=""
            id="myBox"
            className={`form-control no-resize custom-height bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "black" : "light"}`}
            rows={8}
            onChange={handleOnChange}
            value={text}
          ></textarea>
          {showAlert && (
            <div className="alert alert-success child" role="alert">
              Copied successfully!
            </div>
          )}

          <div
            className={`d-flex gap-5 mt-2 mb-3 text-${props.mode === "light" ? "dark-emphasis" : "white"} fs-6`}
          >
            <p>
              {text === ""
                ? text.trim().split(" ").length - 1
                : text.trim().split(" ").length}{" "}
              Words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
          </div>
        </div>

        <div className="col-4 overflow-hidden">
          <h1
            className={`fs-3 mb-3 text-${props.mode === "light" ? "black" : "white"}`}
          >
            Preview
          </h1>
          <p
            className={`form-control custom-height scroll-box user-select-none bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "black" : "light"}`}
          >
            {text.length > 0
              ? text
              : "Write something to Textbox preview here."}
          </p>
        </div>
      </div>

      <div className="d-flex gap-2 align-items-start">
        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleCleanText}
        >
          Clean Text
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary flex-shrink-0" onClick={handleCopy}>
          Copy
        </button>
      </div>
    </>
  );
}

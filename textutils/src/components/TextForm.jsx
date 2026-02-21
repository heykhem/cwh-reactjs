import { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase().trim();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase().trim();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleCleanText = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert("Text Cleaned", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container row mt-5">
        <div className="mb-3 parent flex-2 col-8 overflow-hidden">
          <h1 className={"fs-3 mb-4"}>{props.heading}</h1>
          <textarea
            name=""
            id="myBox"
            className={"form-control no-resize custom-height"}
            rows={8}
            onChange={handleOnChange}
            value={text}
          ></textarea>

          <div className={"d-flex gap-5 mt-2 mb-3 "}>
            <p>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              Words and {text.length} characters
            </p>
            <p>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              Minutes to Read
            </p>
          </div>
        </div>

        <div className="col-4 overflow-hidden">
          <h1 className={"fs-3 mb-4"}>Preview</h1>
          <p
            className={"form-control custom-height scroll-box user-select-none"}
          >
            {text.length > 0
              ? text
              : "Write something to TextBox to preview here."}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2 align-items-start">
        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleLoClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleCleanText}
          disabled={text.length === 0}
        >
          Clean Text
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>

        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy
        </button>
      </div>
    </>
  );
}

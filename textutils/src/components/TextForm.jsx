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
    const textarea = document.getElementById("myBox");
    textarea.select();
    navigator.clipboard.writeText(text);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="d-flex">
        <div className="container">
          <div className="mb-3 parent">
            <h1 className="fs-3 mb-3">{props.heading}</h1>
            <textarea
              name=""
              id="myBox"
              className="form-control no-resize custom-height"
              rows={8}
              onChange={handleOnChange}
              value={text}
            ></textarea>
            {showAlert && (
              <div className="alert alert-success child" role="alert">
                Copied successfully!
              </div>
            )}
          </div>

          <div className="d-flex gap-5 mt-2 mb-3 ">
            <p>
              {text === ""
                ? text.split(" ").length - 1
                : text.split(" ").length}{" "}
              words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
          </div>

          <div className="d-flex gap-1 align-items-start">
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
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        </div>

        <div className="container">
          <h1 className="fs-3 mb-3">Preview</h1>
          <p className="form-control custom-height scroll-box">{text}</p>
        </div>
      </div>
    </>
  );
}

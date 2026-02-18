import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase().trim();
    setText(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase().trim();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="d-flex">
        <div className="container">
          <div className="mb-3">
            <h1 className="fs-3 mb-3">{props.heading}</h1>
            <textarea
              name=""
              id="myBox"
              className="form-control no-resize custom-height"
              rows={8}
              onChange={handleOnChange}
              value={text}
            ></textarea>
          </div>

          <div className="d-flex gap-5 mt-2 mb-3 ">
            <p>
              {text === ""
                ? text.split(" ").length - 1
                : text.split(" ").length}{" "}
              words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
          </div>

          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary ms-3" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
        </div>

        <div className="container">
          <h1 className="fs-3 mb-3">Preview</h1>
          <p className="form-control custom-height scroll-box">{text}</p>
        </div>
      </div>
    </>
  );
}

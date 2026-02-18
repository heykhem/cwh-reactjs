import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({});
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (!myStyle.backgroundColor) {
      document.body.style.backgroundColor = "Black";

      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      document.body.style.backgroundColor = "White";

      setMyStyle({});
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container">
      <h1 className="fs-2 mb-3" style={myStyle}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Convert Text Case
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils lets you quickly convert your text to UPPERCASE and
              lowercase in one click, making editing fast and simple.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Clean And Format Text
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Remove extra spaces, clear text instantly, and format your content
              for better readability without manual effort.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Analyze Your Content
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Get instant word count, character count, estimated reading time,
              and a live preview to understand your text better.
            </div>
          </div>
        </div>
      </div>

      <button onClick={toggleStyle} className="btn btn-primary mt-3">
        {btnText}
      </button>
    </div>
  );
}

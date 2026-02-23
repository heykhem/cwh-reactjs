import loading from "/img/loading-spinner.gif";

function Spinner() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading-spinner" style={{ width: "40px" }} />
    </div>
  );
}

export default Spinner;

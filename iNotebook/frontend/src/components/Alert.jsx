export default function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") word = "Error";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} position-fixed  alert-dismissible fade show child`}
        role="alert"
        style={{ bottom: "10px", right: "10px", zIndex: "99999" }}
      >
        <strong>{capitalize(props.alert.type)} </strong> {props.alert.msg}
      </div>
    )
  );
}

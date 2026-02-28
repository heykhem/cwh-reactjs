function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex gap-3 mt-3">
            <i className="fa-regular fa-pen-to-square"></i>
            <i className="fa-regular fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

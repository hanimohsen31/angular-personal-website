import "./TeamCard.css";

export const TeamCard = (props) => {
  return (
    <>
      <div className="TeamCard">
        <div className="col">
          <div className="card">
            <img src={props.hani} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.job}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

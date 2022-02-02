import "./TeamCard.css";

export const TeamCard = (props) => {
  return (
    <>
      <div className="TeamCard">
        <div class="col">
          <div class="card">
            <img src={props.hani} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.job}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import "./TeamCard.css";
import TeamCardImg from "./../../static/img/s2.jpg";

export const TeamCard = () => {
  return (
    <>
      <div className="TeamCard">
        <div class="col">
          <div class="card">
            <img src={TeamCardImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

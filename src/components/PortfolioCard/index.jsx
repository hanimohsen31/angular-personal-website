import "./PortfolioCard.css";
import PortCardImg from "./../../static/img/s2.jpg";

export const PortfolioCard = () => {
  return (
    <>
    <div className="PortfolioCard">

      <div class="col">
        <div class="card">
          <img src={PortCardImg} class="card-img-top" alt="..." />
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

import "./PortfolioCard.css";
export const PortfolioCard = (props) => {
  return (
    <>
    <div className="PortfolioCard">

      <div class="col">
        <div class="card">
          <img src={props.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            {/* <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p> */}
            <a className="btn btn-outline-success my-4" href={props.link}>View On Behance</a>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

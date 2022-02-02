import "./ServicesCard.css";
export const ServicesCard = (props) => {

  return (
    <>
    <div className="ServicesCard">
      <div class="col">

        <div class="card text-center">
          <img src={props.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
          </div>

          <a href={props.contact} rel="noreferrer" className="PortfolioBtn btn btn-light " target='_blank'>More Info</a>
        </div>

      </div>
      </div>
    </>
  );
};

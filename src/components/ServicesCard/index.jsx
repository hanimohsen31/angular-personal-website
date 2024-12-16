import "./ServicesCard.css";
export const ServicesCard = (props) => {
const showBot = () => {
  document.querySelector('.rsc-float-button').click()

}
  return (
    <>
    <div className="ServicesCard">
      <div className="col">

        <div className="card text-center">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title wow fadeInUp">{props.title}</h5>
            <p className="card-text wow fadeInUp">{props.desc}</p>
          </div>

          <button onClick={showBot} className="PortfolioBtn btn btn-outline-dark ">More Info</button>
        </div>

      </div>
      </div>
    </>
  );
};

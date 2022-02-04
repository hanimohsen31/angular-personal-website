import "./ServicesCard.css";
export const ServicesCard = (props) => {
const showBot = () => {
  document.querySelector('.rsc-float-button').click()

}
  return (
    <>
    <div className="ServicesCard">
      <div class="col">

        <div class="card text-center">
          <img src={props.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title wow fadeInUp">{props.title}</h5>
            <p class="card-text wow fadeInUp">{props.desc}</p>
          </div>

          <button onClick={showBot} className="PortfolioBtn btn btn-outline-danger ">More Info</button>
        </div>

      </div>
      </div>
    </>
  );
};

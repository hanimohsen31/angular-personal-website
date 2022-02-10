import "./PortfolioCard.css";
export const PortfolioCard = (props) => {
  console.log('PortfolioCard')
  console.log(props)

  return (
    <>
      <div className="PortfolioCard">
        <div class="col">
          <div class="card">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.des}</p>
              <a
                className="btn btn-outline-dark"
                data={props.link}
                href={'/'+props.link}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import "./PortfolioCard.css";
export const PortfolioCard = (props) => {
  // console.log('PortfolioCard')
  // console.log(props)

  return (
    <>
      <div className="PortfolioCard">
        <div className="col">
          <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.des}</p>
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

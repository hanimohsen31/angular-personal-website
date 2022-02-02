import { PortfolioCard } from "../PortfolioCard";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <>
      <div className="Portfolio container">
        <h1>Portfolio</h1>
        <p className='PortfolioDes'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          itaque ratione dolores aspernatur quae blanditiis velit corrupti
          quisquam.
        </p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <button className="PortfolioBtn btn btn-success">View All On Behance</button>
      </div>
    </>
  );
};

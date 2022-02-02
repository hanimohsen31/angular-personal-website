import { PortfolioCard } from "../PortfolioCard";
import "./Portfolio.css";

export const Portfolio = (props) => {
  return (
    <>
      <div className="Portfolio container" id="Portfolio">
        <h1>Portfolio</h1>
        <p className="PortfolioDes">
          Here you can see some of our creative work for some of the projects
          that we have worked on with different clients who trusted us and got
          the results that satisfied them very much in return for this trust.
        </p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
          <PortfolioCard
            link="https://www.behance.net/gallery/136097157/Dark-Bedroom"
            img={props.img1}
            title="Luxury Bedroom"
            desc=""
          />
          <PortfolioCard
            link=""
            img={props.img2}
            title="Luxury Bathroom"
            desc=""
          />
          <PortfolioCard
            link="https://www.behance.net/gallery/88207515/Arabic-Islamic-Majlis"
            img={props.img3}
            title="Arabic Majlis"
            desc=""
          />
          <PortfolioCard
            link="https://www.behance.net/gallery/112532135/Lecture-Hall"
            img={props.img4}
            title="Lecture Hall"
            desc=""
          />
          <PortfolioCard
            link="https://www.behance.net/gallery/123726847/Russian-Apartment"
            img={props.img5}
            title="Russian Appartment"
            desc=""
          />
          <PortfolioCard
            link=""
            img={props.img6}
            title="Dressing Room"
            desc=""
          />
          <PortfolioCard
            link="https://www.behance.net/gallery/94942379/Girl-Bedroom-Scandinavian"
            img={props.img7}
            title="Girly Bedroom"
            desc=""
          />
          <PortfolioCard
            link="https://www.behance.net/gallery/90503319/Dining-Table"
            img={props.img8}
            title="Classic Dining Room"
            desc=""
          />
          <PortfolioCard
            link="https://www.behance.net/gallery/125731313/Russian-Apartment-P2"
            img={props.img9}
            title="Kids Bedroom"
            desc=""
          />
        </div>
        <a
          href="https://www.behance.net/hanimohsen3810"
          target="_blank"
          className="PortfolioBtn btn btn-success"
        >
          View All On Behance
        </a>
      </div>
    </>
  );
};

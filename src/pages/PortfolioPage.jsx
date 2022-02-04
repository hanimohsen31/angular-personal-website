import { Navbar } from "../components/Navbar";
import { PortfolioCard } from "../components/PortfolioCard";
import { ChatbotComp } from "../components/ChatbotComp";
import { Footer } from "../components/Footer"

export const PortfolioPage = (props) => {
  return (
    <>
      <div className="Header">
        <header>
          <Navbar classAttr={"bg-dark"} />
        </header>
      </div>

      {/* end header */}
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
              link={"luxury"}
              img={props.data.luxury[0].img}
              title={props.data.luxury[0].title}
              desc=""
            />
            <PortfolioCard
              link={"bath"}
              img={props.data.bath[0].img}
              title={props.data.bath[0].title}
              desc=""
            />
            <PortfolioCard
              link={"arabic"}
              img={props.data.arabic[0].img}
              title={props.data.arabic[0].title}
              desc=""
            />
            <PortfolioCard
              link={"lecture"}
              img={props.data.lecture[0].img}
              title={props.data.lecture[0].title}
              desc=""
            />
            <PortfolioCard
              link={"russian"}
              img={props.data.russian[0].img}
              title={props.data.russian[0].title}
              desc=""
            />
            <PortfolioCard
              link={"restaurant"}
              img={props.data.restaurant[0].img}
              title={props.data.restaurant[0].title}
              desc=""
            />

            <PortfolioCard
              link={"kitchen"}
              img={props.data.kitchen[0].img}
              title={props.data.kitchen[0].title}
              desc=""
            />

            <PortfolioCard
              link={"sofra"}
              img={props.data.sofra[0].img}
              title={props.data.sofra[0].title}
              desc=""
            />

            <PortfolioCard
              link={"kids"}
              img={props.data.kids[0].img}
              title={props.data.kids[0].title}
              desc=""
            />
          </div>
          <a
            rel="noreferrer"
            href="https://www.behance.net/hanimohsen3810"
            target="_blank"
            className="PortfolioBtn btn btn-danger"
          >
            View All On Behance
          </a>
        </div>
      </>

      <ChatbotComp />
      <Footer/>

    </>
  );
};

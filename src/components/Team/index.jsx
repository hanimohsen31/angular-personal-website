import "./Team.css";
import { TeamCard } from "../TeamCard";
import hani from "../../static/img/hani.jpg";

export const Team = (props) => {
  return (
    <>
      <div className="Team container">
        <h1 className="wow fadeInUp">Our Team</h1>
        <p className="TeamDesc wow fadeInUp">
          A good team is the foundation for any high-performing business.
          Superficially, a thriving team looks very much like any other.
          However, it is what occurs unbeknown to a mere observer which
          separates a good team from the best team.
        </p>
        <div className="row">
          <div className="col1 col-md-3 col-sm-12 wow fadeInUp">
            <TeamCard
              hani={hani}
              title="Hani Mohsen"
              job="Interior Designer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

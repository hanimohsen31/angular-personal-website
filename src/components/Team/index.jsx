import "./Team.css";
import { TeamCard } from "../TeamCard";

export const Team = (props) => {
  return (
    <>
      <div className="Team container">
        <h1>Our Team</h1>
        <p className="TeamDesc">
          A good team is the foundation for any high-performing business.
          Superficially, a thriving team looks very much like any other.
          However, it is what occurs unbeknown to a mere observer which
          separates a good team from the best team.
        </p>
        <div class="row">
          <div className="col1 col-md-3 col-sm-12">
            <TeamCard
              hani={props.hani}
              title="Hani Mohsen"
              job="Interior Designer"
            />
          </div>
          <div className="col1 col-md-3 col-sm-12">
            <TeamCard
              hani={props.khaled}
              title="Khaled Rashed"
              job="Implementation Manager"
            />
          </div>
        </div>
      </div>
    </>
  );
};

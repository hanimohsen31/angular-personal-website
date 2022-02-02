import "./Team.css";
import content1 from "./../../static/img/s2.jpg";
import { TeamCard } from "../TeamCard";

export const Team = () => {
  return (
    <>
      <div className="Team container">
        <h1>Our Team</h1>
        <p className="TeamDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          itaque ratione dolores aspernatur quae blanditiis velit corrupti
          quisquam.
        </p>
        <div class="row">
            <div className="col1 col-md-4 col-sm-12">
             <TeamCard />
            </div>
            <div className="col1 col-md-4 col-sm-12">
             <TeamCard />
            </div>
        </div>
      </div>
    </>
  );
};

import "./Content1.css";
import content1 from "./../../static/img/s2.jpg"


export const Content1 = () => {
  return (
    <>
      <div className="Content1 container">
        <div className="row">

          <div className="col1 col-12 col-lg-6">
            <h4>About us</h4>
            <div className="content1pre">
              <p className="h3">Enjoy the best</p>
              <p className="h3"><span>design </span>and</p>
              <p className="h3"><span>functions </span>combined</p>
              <p className="h3">together</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              non suscipit minima autem atque reprehenderit alias amet! Pariatur
              ducimus voluptates, aspernatur culpa, necessitatibus tenetur
              eveniet deserunt sit, illum error doloribus!
            </p>
          </div>

          <div className="col2 col-12 col-lg-5">
            <img src={content1} alt="conetnt1"/>
          </div>
        </div>
      </div>
    </>
  );
};

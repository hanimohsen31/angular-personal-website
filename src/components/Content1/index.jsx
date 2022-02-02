import "./Content1.css";

export const Content1 = (props) => {
  return (
    <>
      <div className="Content1 container">
        <div className="row">
          <div className="col1 col-12 col-lg-6">
            <h4>About us</h4>
            <div className="content1pre">
              <p className="h3">Enjoy the best</p>
              <p className="h3">
                <span>design </span>and
              </p>
              <p className="h3">
                <span>functions </span>combined
              </p>
              <p className="h3">together</p>
            </div>
            <p>
              If it's all about design, leave it to us to show you the limits of
              our endless creative possibilities and we're absolutely sure it
              will satisfy your taste.
            </p>
          </div>

          <div className="col2 col-12 col-lg-5">
            <img src={props.img} alt="conetnt1" />
          </div>
        </div>
      </div>
    </>
  );
};

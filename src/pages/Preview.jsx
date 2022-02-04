import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ChatbotComp } from "../components/ChatbotComp";
import {useHistory} from "react-router-dom";

export const Preview = (props) => {
  const data = props.data;
  const history = useHistory();
  return (
    <>
      <Navbar classAttr={"bg-dark"} />
      <h1 className="text-center wow fadeInDown" style={{'margin':'100px auto 30px'}}>{data[0].title}</h1>
      {data.map((p) => (
        // console.log(p)
        <div className="text-center">
          <img src={p.img} className="m-3 text-center wow fadeInDown" style={{'width':'70%'}} alt={'missing'}/>
        </div>
      ))}
      <ChatbotComp />
      <div className="text-center m-3">

      <button className="btn btn-danger wow fadeInDown" onClick={() => history.goBack()}>Go Back</button>
      </div>
      <Footer />
    </>
  );
};

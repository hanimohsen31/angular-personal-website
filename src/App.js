import { Content1 } from "./components/Content1";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { Counter } from "./components/Counter";
import { ChatbotComp } from "./components/ChatbotComp";

import im1 from "./static/img/arabic.jpg"
import im2 from "./static/img/bath.jpg"
import im3 from "./static/img/dres.jpg"
import im4 from "./static/img/kid1.jpg"
import im6 from "./static/img/lec.jpg"
import im7 from "./static/img/lux1.jpg"
import im10 from "./static/img/mosq1.jpg"
import im11 from "./static/img/mosq2.jpg"
import im12 from "./static/img/rest1.jpg"
import im13 from "./static/img/sofra.jpg"
import im14 from "./static/img/g.jpg"
import hani from "./static/img/hani.jpg"
import khaled from "./static/img/khaled.jpg"

function App() {
  return (
    <>
      <Header img ={im7} />
      <Services img1={im7} img2={im10} img3={im12} />
      <Content1 img={im11}/>
      <Portfolio 
        img1={im7} img2={im2} img3={im1} 
        img4={im6} img5={im11} img6={im3}
        img7={im14} img8={im13} img9={im4}/>
      <Team hani={hani} khaled={khaled}/>
      <Contact/>
      <ChatbotComp/>
      <Counter/>
      <Footer />
      <br />
    </>
  );
}

export default App;

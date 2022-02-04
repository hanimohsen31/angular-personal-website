import { Content1 } from "../components/Content1";
import { Portfolio } from "../components/Portfolio";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Counter } from "../components/Counter";
import { ChatbotComp } from "../components/ChatbotComp";


export const Home = (props) => {
  console.log(props.data);
  return (
    <>
      <Header img={props.data.luxury[0].img} />

      <Services
        img1={props.data.luxury[0].img}
        img2={props.data.russian[5].img}
        img3={props.data.restaurant[0].img}
      />

      <Content1 img={props.data.russian[1].img} />

      <Portfolio data={props.data}/>

      <Team/>
      
      <Contact />
      <ChatbotComp />
      <Counter />
      <Footer />
    </>
  );
};

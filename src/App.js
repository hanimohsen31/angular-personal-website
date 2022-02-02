import { Content1 } from './components/Content1';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar'
import { Overlap } from './components/Overlap';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overlap/>
      <Content1/>
      <Portfolio/>
      <Team/>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr/>
    </>
  );
}

export default App;

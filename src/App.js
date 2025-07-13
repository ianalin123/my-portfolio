import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Techstack } from './components/Tech';



function App() {
  return (
    <div className="App">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <NavBar />
      <Banner />
      </div>
      <Projects />
      <ExperienceTimeline />
      <Techstack />
      </div>
  );
}

export default App;

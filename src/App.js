import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { EduTimeline } from './components/EduTimeline';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Techstack } from './components/Tech';
import { Toolstack } from './components/Tool';



function App() {
  return (
    <div className="App">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <NavBar />
      <Banner />
      </div>
      <EduTimeline />
      <ExperienceTimeline />
      <Projects />
      <Techstack />
      <Toolstack />
    </div>
  );
}

export default App;

import './App.css'


import MainPage from "./pages/mainPage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import SettingsButton from "./components/SettingsButton";
import { GalaxyComponent } from '@r0rri/react-galaxy-bg';



import SideMenu from "./components/SideMenu";
import CustomCursor from './components/CustomCursor';


function App()  {
   
  return (
    <div className='relative'>
      <CustomCursor />
    <div className="min-h-screen text-white relative">
      <GalaxyComponent 
       starCount1={1000}
      starCount2={300}
      starCount3={150}
      enableShootingStars={true}
      className="mi-galaxia-personalizada"
      style={{ zIndex: -10 }}
      />
      <Header />
      
     
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center ">
          
          <MainPage />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          
          <AboutMe />
        </section>

        {/* <section id="projects" className="min-h-screen flex items-center justify-center">
          
          <Projects />
         </section> */}
         <section id="resume" className="min-h-screen flex items-center justify-center">
          <Resume />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          
          <ContactMe />
        </section>
      </main>

      

      {/* Menú lateral / inferior */}
      <SideMenu />
      <Footer />
      <SettingsButton
        
      />
    </div>
    </div>
  );
}

export default App;




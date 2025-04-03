import { NavLink } from "react-router-dom";
import PurpleSkies from '../assets/PurpleSkies.jpg';
import LinkedIn from '../assets/LinkedInPhoto.jpg';
import { TypeAnimation } from "react-type-animation";



const personalQuote = '"You be the limit at which you start from"';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection ">
        <h2 className="text-4xl mb-2">
         <TypeAnimation 
        sequence={[
          "Welcome, I am Olafende Akinleye.",
          1000,
        ]}
        wrapper="span"
        speed={200}
        classname="text-6xl font-bold"
        repeat={1}/>
       </h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        <img src={LinkedIn} className="h-96 w-96 rounded-full object-cover object-center ml-auto" />
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PurpleSkies} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">
          My journey into tech began when my cousin, a software engineer, introduced me to coding and the way technology shapes user experiences. This sparked my passion, and since then, I’ve been actively learning, building projects, and gaining hands-on experience through programs like NPower. <br></br>

        I am transitioning into software engineering with a bachelors of science in biochemisty, and professional work experience in healthcare. My previous experience working in a fast-paced lab environment has honed my problem-solving skills, adaptability, and attention to detail, traits I’m eager to bring into software engineering. I’m particularly excited about the opportunity to work on impactful projects that solve real-world problems, and I’m eager to continue learning in a collaborative, dynamic team setting. I’m looking for opportunities to grow as an engineer, contribute meaningfully, and leverage my unique perspective to make a difference in the tech field.
        </p>
        <br></br>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">Throughout my journey in app development, I have worked on multiple projects that showcase my skills in HTML, CSS, JavaScript, TypeScript, and React. These projects highlight my ability to build interactive user interfaces, manage state effectively, and create responsive designs that enhance user experience.

          Please Click the link for more information.
        </p>
        <br></br>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home
import { FaGithub } from "react-icons/fa6";
import Weather from "../assets/Birds2.jpg"
// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    image: <img src={Weather}/>,
    title: 'Food-Ordering Website',
    description: 'Description of project 1',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    image: <img src={Weather}/>,
    title: 'Weather App',
    description: 'building a React weather application that fetches data from the OpenWeather API and displays the current weather based on a user-selected location using components, props, event handling, forms, API calls, and hooks.',
    repositoryLink: 'https://github.com/Olafende/Weather-App-Template',
  },
  {
    image: <img src={Weather}/>,
    title: 'Book Website',
    description: 'Collaborative book Store Website using HTML, CSS, and JavaScript (DOM manipulation) to reinforce client-side development basics. ',
    repositoryLink: 'https://github.com/maricelyvq/Path2tech-Dom_Project',
  },
  {
    image: <img src={Weather}/>,
    title: 'Javascript',
    description: 'Description of project 4',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    image: <img src={Weather}/>,
    title: 'Email CSS',
    description: 'Description of project 5',
    repositoryLink: 'Link to the GitHub repository',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
           <FaGithub/> {/* <p>{project.image}</p> */}
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects
import Food from "../assets/FoodWebsite.jpg";
import Weather from "../assets/Weather.jpg";
import Book from "../assets/Book.jpg"
import Task from "../assets/Task.jpg"
import Email from "../assets/Email.jpg"


const myProjects = [
  {
    image: <img src={Food}/>,
    title: 'Food-Ordering Website',
    description: 'Enterprise-Level Food Ordering Platform  using  React, Node.js, MongoDB, Auth, Stripe, render.com, and more!',
    repositoryLink: 'https://github.com/Olafende/Final-Project-Frontend',
  },
  {
    image: <img src={Weather}/>,
    title: 'Weather App',
    description: 'building a React weather application that fetches data from the OpenWeather API and displays the current weather based on a user-selected location using components, props, event handling, forms, API calls, and hooks.',
    repositoryLink: 'https://github.com/Olafende/Weather-App-Template',
  },
  {
    image: <img src={Book}/>,
    title: 'Book Website',
    description: 'Collaborative book Store Website using HTML, CSS, and JavaScript (DOM manipulation) to reinforce client-side development basics. ',
    repositoryLink: 'https://github.com/maricelyvq/Path2tech-Dom_Project',
  },
  {
    image: <img src={Task}/>,
    title: 'TODO List',
    description: 'TODO list project using JavaScript in the index.js file. This application allows users to add, delete, and mark tasks as completed, showcasing my ability to work with the DOM and manage user interactions.',
    repositoryLink: 'https://github.com/Olafende/JavaScript-Project',
  },
  {
    image: <img src={Email}/>,
    title: 'Email Template Webpage',
    description: 'This project displays dynamic, user-friendly interface that enhances the email viewing experience using HTML and CSS',
    repositoryLink: 'https://github.com/Olafende/Path2Tech_CSS_Project',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
           <p>{project.image}</p> 
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
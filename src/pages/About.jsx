import { NavLink } from 'react-router-dom';
import LinkedIn from '../assets/LinkedInPhoto.jpg';

// Replace these variables with your information
const firstName = 'Olafende';
const jobTitle = 'andrology lab tech';
const company = 'Shady Grove Fertility';
const mainDuty = 'helping individuals start or grow their families.';
const jobLocation = 'Washington, D.C.';
const briefJobDescription = 'I independently managed lab operations at a satellite location, ensuring efficient workflow and compliance with industry standards. My responsibilities included processing specimens for routine semen analysis—assessing concentration, motility, morphology, and leucocyte identification. I also performed semen preparation for ART procedures, intrauterine inseminations (IUIs), and cryopreservation. Additionally, I handled the shipping, receiving, and disposition of frozen samples, maintaining proper documentation and chain of custody. ';
const careerObjective = 'My career goal is to transition from healthcare and laboratory work into software development, specifically as a software developer.';
const personalLife = 'One thing to know about me is that I love bubble tea! I also enjoy hanging with family  while I do the former. ';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={LinkedIn} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}&#128512;</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;
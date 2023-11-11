// 

import './ProjectIndex.css'

const ProjectBanner = ({project}) => {
  return ( 
    <div className="project-card">
      <img src={project.image} alt="image of app" className='project-img' />
      <div className='txt-box'>
      <h3>{project.name}</h3>
      <p>{project.tech}</p>
      <p>{project.description}</p>
      <a href={project.github}><p>View on Github</p></a>
      <a href={project.deployment}><p>Visit Website</p></a>
      </div>
    </div>
  )
}

export default ProjectBanner
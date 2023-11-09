// 

import './ProjectIndex.css'

const ProjectBanner = ({project}) => {
  return ( 
    <div className="project-card">
      <img src={project.image} alt="image of app" />
      <h3>{project.name}</h3>
      <p>{project.tech}</p>
      <p>{project.description}</p>
      <a href={project.github}><p>View on Github</p></a>
      <a href={project.deployment}><p>Visit Website</p></a>
    </div>
  )
}

export default ProjectBanner
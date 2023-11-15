// css
import './ProjectIndex.css'

const ProjectBanner = ({project}) => {
  return ( 
    <div className="project-card">
      <img src={project.image} alt="image of app" className='project-img' />
      <div className='txt-box'>
      <a href={project.deployment}><h3>{project.name}</h3></a>
      <p><b>{project.tech}</b></p>
      <p>{project.description}</p>
      <div className='project-btns'>
      <a href={project.github}><p><b>View on Github</b></p></a>
      <a href={project.deployment}><p><b>Visit Website</b></p></a>
      </div>
      </div>
    </div>
  )
}

export default ProjectBanner
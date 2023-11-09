const ProjectBanner = ({project}) => {
  return ( 
    <div className="project-card">
      <img src={project.image} alt="image of app" />
      <h3>{project.name}</h3>
      <p>{project.tech}</p>
      <p>{project.description}</p>
      <a href="{projects.github}"><p>{project.description}</p></a>
    </div>
  )
}

export default ProjectBanner
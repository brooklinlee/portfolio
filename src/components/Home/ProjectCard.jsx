import './Project.css'

const ProjectCard = ({item}) => {
  return ( 
    <div className="carousel-item">
      <img className="carousel-img" src={item.image} alt="image of app" />
      <div className="carousel-item-text"><h3>{item.name}</h3></div>
      <div className="carousel-item-text"><p>{item.tech}</p></div>
    </div>
  )
}

export default ProjectCard;
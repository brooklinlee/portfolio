import { Link } from 'react-router-dom'

import './Project.css'

const ProjectCard = ({item}) => {
  return ( 
    <div className="carousel-item">
      <img className="carousel-img" src={item.image} alt="image of app" />
      <Link to='/projects'>
        <div className="carousel-item-text"><h3>{item.name}</h3></div>
      </Link>
      <div className="carousel-item-text"><p>{item.tech}</p></div>
    </div>
  )
}

export default ProjectCard;
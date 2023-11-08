// components
import ProjectCard from './ProjectCard'

// css
import './Project.css'

const ProjectList = () => {
  const cards = [
    {
      name: 'WellFit - Workout Tracker',
      tech: 'Python / Django / Docker',
      // description: 'Workout Tracker',
      image: ('./src/assets/wellfit-pc.svg'),
    },
    {
      name: 'Wandr - Travel Themed Social Media',
      tech: 'Full-Stack / Group Git Workflow / React / MongoDB & Mongoose',
      // description: 'Travel themed soci',
      image:('./src/assets/wellfit-pc.svg'),
    },
    {
      name: 'The Yum Yum Hub - Recipe Collector',
      tech: 'Python / Django / Docker',
      // description: '',
      image: ('./src/assets/wellfit-pc.svg'),
    },
    {
      name: 'Word Whimsy - Online Journaling',
      tech: 'JavaScript / Express.js / MongoDB & Mongoose',
      // description: '',
      image: ('./src/assets/wellfit-pc.svg'),
    },
    {
      name: 'The Silly Goose Grape-Venture',
      tech: 'HTML & CSS / JavaScript / Game Logic',
      // description: '',
      image: ('./src/assets/wellfit-pc.svg'),
    },
  ]

  return ( 
    <div className="my-projects-home-container">
      <h1>My Complete Projects</h1>
      <ProjectCard />
      <div>
        <img src="./src/assets/wellfit-pc.svg" alt="wellfit app project card" />
        <h3>WellFit - Workout Tracker</h3>
        <p>Python / Django / Docker</p>
      </div>
      <div>
        <img src="./src/assets/wandr-pc.svg" alt="wellfit app project card" />
        <h3>Wandr - Travel Themed Social Media</h3>
        <p>Python / Django / Docker</p>
      </div>
      <div>
        <img src="./src/assets/yyh-pc.svg" alt="wellfit app project card" />
        <h3>The Yum Yum Hub - Recipe Collector</h3>
        <p>Python / Django / Docker</p>
      </div>
      <div>
        <img src="./src/assets/word-whimsy-pc.svg" alt="wellfit app project card" />
        <h3>Word Whimsy - Online Journaling</h3>
        <p>JavaScript / Express.js / Docker</p>
      </div>
      <div>
        <img src="./src/assets/tsgg-pc.svg" alt="wellfit app project card" />
        <h3>The Silly Goose Grape-Venture - Choose Your Own Adventure Game</h3>
        <p>Python / Django / Docker</p>
      </div>
    </div>
  )
}

export default ProjectList 
// css
import './Project.css'

const ProjectList = () => {
  return ( 
    <div className="my-projects-home-container">
      <h1>My Complete Projects</h1>
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
        <p>Python / Django / Docker</p>
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
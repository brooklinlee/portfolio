// css
import './Skills.css'

const Skills = () => {
  return ( 
    <div className='skills-container'>
      <h1>Top Skills</h1>
      <div className='skill-card-container'>
        <div className='skill-card'>
          <img src="./src/assets/tech-icon.svg" alt="tech icon"/>
          <h3>Technologies</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className='skill-card'>
          <img src="./src/assets/framework-icon.svg" alt="tech icon"/>
        <h3>Frameworks & Services</h3>
          <ul>
            <li>Github</li>
            <li>Google OAuth</li>
            <li>JWT Authentication</li>
            <li>JSON</li>
            {/* <li>API</li> */}
            <li>Node.js/Express.js</li>
            {/* <li>Express.js</li> */}
            <li>Django</li>
          </ul>
        </div>
        <div className='skill-card'>
          <img src="./src/assets/method-icon.svg" alt="tech icon"/>
        <h3>Methodologies</h3>
          <ul>
            <li>Agile development</li>
            <li>RESTful Routing</li>
            <li>Scrum</li>
            <li>A/B Testing</li>
            <li>QA Testing</li>
            <li>Debugging</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Skills
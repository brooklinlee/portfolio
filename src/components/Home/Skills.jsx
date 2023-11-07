// css
import './Skills.css'

const Skills = () => {
  return ( 
    <div className='skills-container'>
      <h1>My Skills</h1>
      <div className='skill-card-container'>
        <div className='skill-card'>
          <h3>Technologies</h3>
          <ul>
            <p>HTML/CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Python</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
          </ul>
        </div>
        <div className='skill-card'>
        <h3>Frameworks & Services</h3>
          <ul>
            <p>Google OAuth</p>
            <p>RESTful Routing</p>
            <p>JSON</p>
            <p>JWT Authentication</p>
            <p>API</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Django</p>
            <p>Github</p>
          </ul>
        </div>
        <div className='skill-card'>
        <h3>Methodologies</h3>
          <ul>
            <p>Agile development methodology</p>
            <p>Scrum</p>
            <p>A/B Testing</p>
            <p>QA Testing</p>
            <p>Debugging</p>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Skills
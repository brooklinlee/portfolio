// imports
// import { Link } from 'react-router-dom'

// images
import devBig from '../../assets/images/dev-big-alt.svg'
import devSmall from '../../assets/images/dev-small-alt.svg'

// css
import'./HomeHeader.css'

const HomeHeader = () => {
  const PNG_FILE_URL = 'https://brooklin-lee-portfolio.netlify.app/BrooklinLee_SoftwareDeveloper.pdf'
  // const PNG_FILE_URL = 'http://localhost:5173/Brooklin_Lee_Software_Developer_Resume.pdf'

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  } 

  return (  
    <div className='home-header'>
      <div className='left-container'>
        <h1>Hello! I'm</h1>
        <h1 id='name'>Brooklin Lee</h1>
        <p>Software Engineer</p>
        {/* <Link to='/projects'> */}
          <button onClick={() => {downloadFileAtURL(PNG_FILE_URL)}}>Download my Resume</button>
        {/* </Link> */}
      </div>
      <div className='right-container'>
        <img src={devBig} alt="Brooklin Lee" className='img-big'/>
        <img src={devSmall} alt="Brooklin Lee" className="small-img" />
      </div>
    </div>
  )
}

export default HomeHeader

// css
import'./HomeHeader.css'

const HomeHeader = () => {
  return (  
    <div className='home-header'>
      <div className='left-container'>
        <h1>Hello! I'm</h1>
        <h1 id='name'>Brooklin Lee</h1>
        <p>Software Engineer</p>
        <button>View Projects</button>
      </div>
      <div className='right-container'>
        <img src="./src/assets/1.svg" alt="Brooklin Lee" className='img-big'/>
        <img src="./src/assets/dev-img-small.svg" alt="" className="small-img" />
      </div>
    </div>
  )
}

export default HomeHeader

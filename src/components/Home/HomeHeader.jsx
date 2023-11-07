// css
import'./HomeHeader.css'

const HomeHeader = () => {
  return (  
    <main className='home-header'>
      <div>
        <div className='hello-msg'>
          <h1>Hello! I'm <br></br>Brooklin Lee</h1>
          <p>software engineer</p>
          <button>View Projects</button>
        </div>
      </div>
      <div>
        <img src="./src/assets/dev.svg" alt="Brooklin Lee" />
      </div>
    </main>
  )
}

export default HomeHeader

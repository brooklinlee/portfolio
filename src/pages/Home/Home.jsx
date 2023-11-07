// components
import HomeHeader from "../../components/Home/HomeHeader"
import Skills from "../../components/Home/Skills"
import ProjectList from "../../components/Home/Project"

// css
import '../Home/Home.css'

const Home = () => {
  return ( 
    <main className="home-page-container">
      <HomeHeader />
      <Skills />
      <ProjectList />
    </main>
  )
}

export default Home

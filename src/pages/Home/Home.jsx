// components
import HomeHeader from "../../components/Home/HomeHeader"
import Skills from "../../components/Home/Skills"
import ProjectList from "../../components/Home/Project"

// css
import '../Home/Home.css'

const Home = () => {
  return ( 
    <>
      <HomeHeader />
      <Skills />
      <ProjectList />
    </>
  )
}

export default Home

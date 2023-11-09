//  components
import ProjectBanner from "./ProjectBanner"

const ProjectIndex = () => {

  const projects = [
    {
      name: 'WellFit - Workout Tracker',
      tech: 'Python, Django, Authentication, Neon DB, Full CRUD functionality, Data Entity Managment, CSS Flexbox & Media Queries, Git Version Control',
      image: ('./src/assets/wellfit-pc.svg'),
      description: 'Did you know that you are almost 50% more likely to achieve your goals if you write them down and track them regularly? How many times have you set a fitness goal only to struggle with consistency and progress tracking? Enter WellFit! WellFit empowers you to reach your fitness goals by providing a dedicated space to log your workouts, add notes, record movement sets, and stay organized. Plus, it reminds you to log your daily workouts, helping you stay on track. Easily record your workouts with details like workout type, datae, duration, and a description. Customize your workout by adding multiple sets that include information such as set name, weight, reps and equipment used. This app is also completely mobile friendly',
      // link: (),
      github: 'https://github.com/brooklinlee/wellfit.git',
      deployment: 'https://wellfit.fly.dev/home/',
    },
    {
      name: 'Wandr - Travel Themed Social Media',
      tech: 'MERN Stack Application, Full-Stack Development, Group Github Workflow, JWT Authentication, Cloudinary for photo uploads',
      image:('./src/assets/wandr-pc.svg'),
      description: 'Wandr is a web-based application with a mission to inspire individuals to step out of their comfort zones, explore diverse cultures, landscapes, and create lasting memories. We believe that every journey has a unique story, and by sharing these stories, we aim to inspire others to embark on their own adventures. Through our platform, we provide resources, inspiration, and a community for travelers to connect, exchange ideas, and foster a sense of belonging. Together, we\'re making the world a more connected and inspired place.',
      // link: (),
      github: 'https://github.com/brooklinlee/wandr-front-end.git',
      deployment: 'https://wandr-sei.netlify.app/',
    },
    {
      name: 'Word Whimsy - Online Journaling',
      tech: 'JavaScript / Express.js / MongoDB & Mongoose',
      image: ('./src/assets/word-whimsy-pc.svg'),
      description: 'Word Whimsy is an online journaling application. Use Word Whimsy to craft Whimsy entries with the option to set them as either pulic (viewable by other Word Whimsy users) or private (visible only to you). You can discover and explore Whimsy pages from other users, and access their posts if they\'ve made them Publicly available. You can also engage with the Word Whimsy community by commenting on publicly visible posts. ',
      // link: (),
      github: 'https://github.com/brooklinlee/word-whimsy.git',
      deployment: 'https://word-whimsy.fly.dev/',
    },
    {
      name: 'The Yum Yum Hub - Recipe Collector',
      tech: 'Python, Django, Docker, Datan Entity Managment',
      image: ('./src/assets/yyh-pc.svg'),
      description: 'Have you ever cooked a delicious meal, and wanted to save the recipe to make again another day? Look no farther! Save all of your favorite recipes in one place with The Yum Yum Hub Recipe Collector. Add cooking events to each recipe with notes to your future self to allow you to continually improve your recipe. ',
      // link: (),
      github: 'https://github.com/brooklinlee/recipe-organizer.git',
      deployment: 'https://github.com/brooklinlee/recipe-organizer.git',
    },
    {
      name: 'The Silly Goose Grape-Venture',
      tech: 'HTML & CSS / JavaScript / Game Logic',
      image: ('./src/assets/tsgg-pc.svg'),
      description: 'The Silly Goose Grape-Venture is a fun and whimsical Choose Your Own Adventure game inspired by the viral "Duck Song" that captivated early internet meme culture in 2009. In this interactive game, you step into the webbed feet of a silly goose on a quest for something to do and, hopefully, a delightful bunch of grapes to munch on. In this game, you will be presented with many choices at the bottom of the screen that will either lead you closer to the next stage of your quest or to an amusing game over. Some choices will move you forward to the next choice, while others will result in a game over. As a callback to the original internet song that inspired this game, there\'s no definitive way to "win," and you might find yourself caught in a silly loop as you continuously search for those elusive grapes.',
      // link: (),
      github: 'https://github.com/brooklinlee/the-silly-goose-grapeventure.git',
      deployment: 'https://the-silly-goose-grapeventure.netlify.app/',
    },
  ]

  return (  
    <main>
      {projects.map((project) => {
        return <ProjectBanner project={project} key={project.name}/>
      })}
      
    </main>
  )
}

export default ProjectIndex

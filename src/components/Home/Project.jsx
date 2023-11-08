import { useState } from 'react'

// components
import ProjectCard from './ProjectCard'

// css
import './Project.css'

const ProjectList = () => {
  const items = [  
    {
      name: 'WellFit - Workout Tracker',
      tech: 'Python / Django / Docker',
      image: ('./src/assets/wellfit-pc.svg'),
    },
    {
      name: 'Wandr - Travel Themed Social Media',
      tech: 'Full-Stack / Group Git Workflow / React / MongoDB & Mongoose',
      image:('./src/assets/wandr-pc.svg'),
    },
    {
      name: 'The Yum Yum Hub - Recipe Collector',
      tech: 'Python / Django / Docker',
      image: ('./src/assets/yyh-pc.svg'),
    },
    {
      name: 'Word Whimsy - Online Journaling',
      tech: 'JavaScript / Express.js / MongoDB & Mongoose',
      image: ('./src/assets/word-whimsy-pc.svg'),
    },
    {
      name: 'The Silly Goose Grape-Venture',
      tech: 'HTML & CSS / JavaScript / Game Logic',
      image: ('./src/assets/tsgg-pc.svg'),
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1
    }
    setActiveIndex(newIndex)
  }

  return (
      <div className="carousel">
        <div 
          className="inner" 
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <ProjectCard item={item} key={item.name} width="100%" />
            }
          )}
        </div>

      <div className="carousel-btns">

        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="arrow-btn"
        >
          &lt;
        </button>

        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className='indicator-btn'
                key={index}
              >
                .
              </button>
            )
          })}

        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="arrow-btn"
        >
          &gt;
        </button>
          </div>
      </div>

  )
}


export default ProjectList 
import React from 'react'
import Footer from "./Footer"
import Datas from "./dataProject"
import Project from './Project';

const Projects = () => {
  return (
    <>
      <div className='flex'>
        {
          Datas.map(data => <Project
            key={data.key}
            image={data.image}
            title={data.title}
            describe={data.describe}
            link={data.link} />
          )}
      </div>
      <Footer />
    </>
  )
}

export default Projects

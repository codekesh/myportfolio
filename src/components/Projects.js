import React from 'react'
import Footer from "./Footer"
const Projects = () => {
  const img1 = require('./images/frontend_mentor.png')
  const img2 = require('./images/art_gallery.png')
  return (
    <div>
      <div className="cards">
        <div>
          <a href="https://www.frontendmentor.io/profile/codekesh" className="card-link" target="_blank" rel="noreferrer">
            <img src={img1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Frontend Mentor</h3>
                  <span className="card__status">The best platform for practice and be good at frontend. </span>
                </div>
              </div>
              <p className="card__description">I make dozen of clones of responsive website mentioned on Frontend Mentor with the help of HTML, CSS, Bootstrap.</p>
            </div>
          </a>
        </div>
        <div>
          <a href="/" className="card-link" target="_blank" rel="noreferrer">
            <img src={img1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Real-Time Chat Applications</h3>
                  <span className="card__status">Chat Applications with sound</span>
                </div>
              </div>
              <p className="card__description">I make chat Applications which can chat and have a sound after recieving and sending message with help of expressjs</p>
            </div>
          </a>
        </div>
        <div>
          <a href="/" className="card-link" target="_blank" rel="noreferrer">
            <img src={img2} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Art Gallery</h3>
                  <span className="card__status">Art Gallery where artists can sell their products and it is responsive</span>
                </div>
              </div>
              <p className="card__description"></p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects

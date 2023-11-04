import React from 'react'
import "../components/HomePage.css"

const HomePage = () => {
  return (
    <>
    <div className="home">
      <div className="navBar">
        <a href="#" className='Logo'>LOGO</a>
        <a href="#" className='navs'>About</a>
        <a href="#" className='navs'>How we work</a>
        <a href="#" className='navs'>Our Work</a>
        <a href="#" className='navs'>Blogs</a>
        <a href="#" className='navs'>Sustainability</a>
        <a href="#" className='navs'>Contact</a>
      </div>

      <span className="anotherLogo">
        LOGO
      </span>

      <div className="center">
      <div className="txt tp">
        Transforming Workplace
      </div>
      <div className="txt">
        <span className="into">into </span>
        Positive Catalysts
      </div>
      </div>
    </div>
    </>
  )
}

export default HomePage
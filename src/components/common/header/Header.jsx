import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <h3>Spaces</h3>
            {/* <img src='./images/logo.png' alt='' /> */}
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5cejWt6zfAvaSfIYYE7yfddSmjsP0_44KlddRLI80vKRRIg/viewform?usp=dialog">
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
            </a>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

import React from 'react'
import Moi from '../img/moi.jpg'

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">CV Frederic</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Moi} alt="Frederic"/>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">Intro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">expérience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">éducation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Temps Libre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#footer">Sur le Web</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header

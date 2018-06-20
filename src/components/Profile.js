import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

class Profile extends React.Component {
  render () {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Web
            <span className="text-primary">Developpeur</span>
          </h1>
          <div className="subheading mb-5">Frédéric, 219 rue Gabriel-Peri · 94400, Vitry-Sur-Seine · 06 89 06 80 06 ·
            <a href="mailto:name@email.com">fredericpaquet@me.com</a>
          </div>
          <p className="mb-5">
            <i className="text-primary fas fa-quote-left fa-3x"></i>
            <font className="text-primary">I</font>ntellectuellement curieux et passionné, l’expansion du monde digital à toujours susciter chez moi un grand intérêt,<br /> j’ai donc postuler à la Wild Code School pour suivre une formation de développeur web spécialisée en JavaScript.
            <i className="text-primary fas fa-quote-right fa-3x"> </i>
          </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/Fredydope">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ricpaquet/">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/FredyDope">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
export default Profile

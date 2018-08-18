import React from 'react'

class Profile extends React.Component {
  render () {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Web
            <span className="text-primary">Développeur</span>
          </h1>
          <div className="subheading mb-5">Frédéric 46 ans, 219 rue Gabriel-Peri · 94400, Vitry-Sur-Seine · 06 89 06 80 06 ·
            <a href="mailto:name@email.com">fredericpaquet@me.com</a>
          </div>
          <p className="mb-5">
            <i className="text-primary fas fa-quote-left fa-3x"></i>  
             Intellectuellement curieux, 
             l’expansion du monde digital à toujours susciter chez moi un vif intérêt.<br/> <br/>
             En premier lieu autodidacte, j’ai ensuite rejoins une école digitale spécialisée en langages de programmation<br/> 
             afin de concrétiser mon enthousiasme et les notions acquises grâce à des projets web concrets.
            <i className="text-primary fas fa-quote-right fa-3x"></i></p>
        </div>
      </section>
    )
  }
}
export default Profile

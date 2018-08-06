import React from 'react'
class Experiences extends React.Component {
render () {
return (
<div>
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div className="my-auto">
      <h2 className="mb-5">Experiences</h2>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Developpeur Web Junior</h3>
          <div className="subheading mb-3">In progress...</div>
          <p>Acquisition des bases techniques de Javascript, des frameworks NodeJS et ReactJS ainsi que la gestion de bases de données MYSQL, toutes nécessaire à la conception et au developpement de projets WEB, via la méthode de travail agile Scrum.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Fevrier 2018 - Present</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Gerant de brasserie</h3>
          <div className="subheading mb-3">Solutions de management</div>
            <ul>
              <li>
                <a>Coordination et supervision de tous les secteurs de la brasserie.</a>
              </li>
              <li>
                <a>Encadrement d'une équipe d'environ dix personnes.</a>
              </li>
              <li>
                <a>Gestions administatives et comptables.</a>
              </li>
              <li>
                <a>Gestion de situations complexes.</a>
              </li>
            </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Janvier 2007 - Mars 2017</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Location de vehicules de préstiges</h3>
          <div className="subheading mb-3">Elite rent luxury car (Cannes)</div>
          <p>Livraison de voitures à l\'international, de véhicules, gestion du parc.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Janvier 2005 - Decembre 2007</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Interim Palais du festival(Cannes)</h3>
          <div className="subheading mb-3">Evenementiel</div>
          <p>Aide à la préparation et participant aux evenements du Palais des expositions MipTV, MipCom, MipIM, Monaco Boat Show.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Janvier 2005 - Decembre 2007</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Nortel Networks (Sophia Antipolis)</h3>
          <div className="subheading mb-3">Logistique</div>
          <p>Gestion des droits de douanes en colaboration avec les transitaires pour l'expedition/reception de materiel informatique à l'international.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">1996 - 2002</span>
        </div>
      </div>
    </div>
  </section>
</div>
)
}
}
export default Experiences
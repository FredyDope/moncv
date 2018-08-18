import React from 'react'
class Experiences extends React.Component {
  render () {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Expériences</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Développeur Web Junior</h3>
                <div className="subheading mb-3">In progress...</div>
                <p>Assembler les pages en HTML5 et CSS3, 
                  intégrer des contenus textes et images dans le code HTML, 
                  mise en place d'une communication entre client et serveur 
                  avec JavaScript et Node JS organiser et gérer la base de données MYSQL.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Fevrier 2018 - Present</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Gérant de brasserie</h3>
                <div className="subheading mb-3">Solutions de management</div>
                <ul>
                  <li>
                    <a>Coordination et supervision de tous les secteurs de la brasserie.</a>
                  </li>
                  <li>
                    <a>Encadrement d'une équipe de dix personnes.</a>
                  </li>
                  <li>
                    <a>Gestions administratives et comptables.</a>
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
                <div className="subheading mb-3">Elite Rent Luxury Car (Cannes)</div>
                <p>Livraison de voitures à l'international, revente des véhicules, gestion du parc.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Janvier 2005 - Decembre 2007</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Interim Palais du festival(Cannes)</h3>
                <div className="subheading mb-3">Evenementiel</div>
                <p>Aide à la préparation et participant aux événements du Palais des expositions MipTV, MipCom, MipIM, Monaco Boat Show.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Janvier 2005 - Decembre 2007</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Nortel Networks (Sophia Antipolis)</h3>
                <div className="subheading mb-3">Logistique</div>
                <p>Gestion des droits de douane en collaboration avec les transitaires pour l'expédition/réception de hardware à l'international.</p>
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

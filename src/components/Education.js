import React from 'react'

class Education extends React.Component {
  render () {
    return (
        <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">
            éducation</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">
                  Wild Code School école numérique.(Paris)
                  </h3>
                  <div className="subheading mb-3">
                  <p>Programme de 5 mois de la formation développeur web et mobile.</p>
                  </div>
                    <div>
                      <ul>
                        <li>
                          <a>Conception d'une application WEB.</a>
                        </li>
                        <li>
                          <a>Gérer une interface utilisateur.</a>
                        </li>
                        <li>
                          <a>Maitriser le développement d'une application.</a>
                        </li>
                        <li>
                          <a>Intégrations des méthodes agiles de gestion de projet.</a>
                        </li>
                        <li>
                          <a>Maitriser HTML, CSS, spécialisation dans un langage de programmation et un framework d’application : JavaScript / React / NodeJS.</a>
                        </li>
                      </ul>
                  </div>
                  <br/>
                  <p>Accès au titre RNCP niveau III</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                  Fevrier 2018 - Aout 2018</span>
                </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">
                écoles de gestion et de commerce Auguste Escoffier, Cagnes-sur-Mer (06)</h3>
                <div className="subheading mb-3">
                BTS/Bac pro Vente Action Marchande
                </div>
                  <div>
                    <ul>
                      <li>
                        <a>Management des entreprises.</a>
                      </li>
                      <li>
                        <a>Management d'équipe.</a>
                      </li>
                      <li>
                        <a>Gestion des ressources humaine.</a>
                      </li>
                      <li>
                        <a>Développement commercial.</a>
                      </li>
                      <li>
                        <a>Gestion de la relation client.</a>
                      </li>
                    </ul>
                  </div>
                  <p>Diplôme de niveau III</p>
              </div>
              <div className="resume-date text-md-right">
                  <span className="text-primary">
                  Septembre 1987 - Juin 1989</span>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Education
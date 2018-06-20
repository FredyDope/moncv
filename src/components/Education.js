import React from 'react'

class Education extends React.Component {
  render () {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Wild Code School école numérique (Paris)</h3>
                <div className="subheading mb-3">Formation développeur web et mobile</div>
                <div>Formation Javascript / React en 5 mois</div>
                <br/>
                <p>Accès au titre RNCP niveau bac+2</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Fevrier 2018 - Aout 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Ecoles de gestion et de commerce Auguste Escoffier, Cagnes-sur-Mer (06)</h3>
                <div className="subheading mb-3">BTS/Bac pro Vente Action Marchande</div>
                <div>
                  <ul>
                    <li>
                      <a>Management des entreprises</a>
                    </li>
                    <li>
                      <a>Management d'équipe</a>
                    </li>
                    <li>
                      <a>Gestion des ressources humaines</a>
                    </li>
                    <li>
                      <a>Développement commercial</a>
                    </li>
                    <li>
                      <a>Gestion de la relation client</a>
                    </li>
                  </ul>
                </div>
                <p>Diplôme de niveau III</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Septembre 1987 - Juin 1989</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}
export default Education

import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './footer.css'
import Wild from '../footer/wild.png'
import Wars from '../footer/wars.png'
import Ioi from '../footer/ioi.png'
import Link from '../footer/link.png'

class Footer extends React.Component {
  render () {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="footer">
          <footer className="page-footer font-small blue pt-4 mt-4">
            <div className="container-fluid text-center text-md-left">

              <div className="row">

                <div className="col-md-6 mt-md-0 mt-3">

                  <h5 className="text-uppercase">Footer</h5>
                  <p>Underconstruction</p>

                </div>

                <hr className="clearfix w-100 d-md-none pb-3"/>

                <div className="col-md-6 mb-md-0 mb-3">

                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="https://wildcodeschool.fr"><img src={Wild} alt="wild"/></a>
                    </li>
                    <li>
                      <a href="https://www.codewars.com/users/fredydope"><img src={Wars} alt="code wars"/></a>
                    </li>
                    <li>
                      <a href="http://www.france-ioi.org/user/perso.php?sLogin=fredydope"><img src={Ioi} alt="france ioi"/></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ricpaquet/"><img src={Link} alt="wild"/></a>
                    </li>
                  </ul>

                </div>

              </div>

            </div>
          </footer>
        </section>
      </div>
    )
  }
}
export default Footer

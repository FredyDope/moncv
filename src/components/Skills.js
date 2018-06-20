import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import './skills.css'

import Bootstrap from '../logos/boot.png'
import GitHub from '../logos/git.png'
import HTML from '../logos/html.png'
import MaterialUi from '../logos/mu.png'
import MySQL from '../logos/sql.png'
import NodeJs from '../logos/nodejs.png'
import Terminal from '../logos/term.png'
import Linux from '../logos/linux.png'
import ReactIcon from '../logos/react.png'
import Css from '../logos/css.png'
import Javascript from '../logos/js.png'

const logos = [
  { src: Bootstrap, alt: 'Bootstrap', title: 'Bootstrap' },
  { src: Linux, alt: 'Linux', title: 'Linux' },
  { src: GitHub, alt: 'GitHub', title: 'GitHub' },
  { src: HTML, alt: 'HTML', title: 'HTML' },
  { src: Terminal, alt: 'Terminal', title: 'Terminal' },
  { src: MaterialUi, alt: 'MaterialUi', title: 'MaterialUi' },
  { src: MySQL, alt: 'MySQL', title: 'MySQL' },
  { src: NodeJs, alt: 'NodeJs', title: 'NodeJs' },
  { src: ReactIcon, alt: 'ReactIcon', title: 'ReactIcon' },
  { src: Css, alt: 'Css', title: 'Css' },
  { src: Javascript, alt: 'Javascript', title: 'Javascript' }
]

const Skills = () => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools
          </div>
          <div id="logo-container" className="logo-container">
            <ResponsiveMasonry
              columnsCountBreakPoints={{100: 3, 350: 3, 750: 6, 900: 6}}>
              <Masonry>
                {logos.map((item, i) =>
                  <div className='skills_logo' key={i}>
                    <img
                      src={item.src}
                      title={item.title}
                      alt={item.alt}
                    />
                  </div>
                )}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className="subheading mb-3">Workflow
          </div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
                    Responsive Design</li>
            <li>
              <i className="fa-li fa fa-check"></i>
                    Front &amp; Back</li>
            <li>
              <i className="fa-li fa fa-check"></i>
                    Teams work</li>
            <li>
              <i className="fa-li fa fa-check"></i>
                    Agile Development &amp; Scrum</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
export default Skills

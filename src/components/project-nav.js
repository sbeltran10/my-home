import React from 'react'
import './project-nav.scss'

const ProjectNav = ({ projectId, title, mainTechs }) => (
  <li className="col-6 col-lg-4 project-nav-li">
    <a href={`#${projectId}`}>
      <div className={`info-cont ${projectId}`}>
        <h3>
          {title}
        </h3>
        <div className="techs">
          {mainTechs}
        </div>
      </div>
    </a>
  </li>
)

export default ProjectNav
import React from 'react'

const ProjectNav = ({ projectId, title, mainTechs }) => (
  <li>
    <a href={`#${projectId}`}>
      <h3>
        {title}
      </h3>
      <div>
        {mainTechs}
      </div>
    </a>
  </li>
)

export default ProjectNav
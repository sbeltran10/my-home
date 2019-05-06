import React from 'react'

import SkillGroup from './skill-group'
import NetworkLink from './network-link'
import Image from './image'

const Project = ({ imgUrl, projectId, title, description, skillGroups, networkLinks }) => (
  <article id={projectId} className="col-12">
    <div className="row pro-title-row">
      <h3 className="col-12">
        {title}
      </h3>
    </div>
    <div className="row proj-main-row">
      <div className="col-12 image-wrap">
        <Image />
      </div>
      <p className="col-12">
        {description}
      </p>
      {skillGroups.map((skillGroup, index) => (
        <SkillGroup key={index} {...skillGroup} />
      ))}
    </div>
    <div className="row proj-skills-det-row">
      <ul className="col-12">
        {networkLinks.map((networkLink, index) => (
          <NetworkLink key={index} {...networkLink} />
        ))}
      </ul>
      <div className="col-12">
        <a>
          View project details
        </a>
      </div>
    </div>
  </article>
)

export default Project
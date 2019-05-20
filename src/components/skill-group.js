import React from 'react'

import './skill-group.scss'

const SkillGroup = ({ category, skills }) => (
  <ul className={`skill-group row ${category}-category`}>
    {skills.map((skill, index) => (
      <li key={index} className="col-auto">
        {skill}
      </li>
    ))}
  </ul>
)

export default SkillGroup
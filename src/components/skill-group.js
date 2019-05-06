import React from 'react'

const SkillGroup = ({ category, skills }) => (
  <ul className={`col-12 ${category}-category`}>
    {skills.map((skill, index) => (
      <li key={index}>
        {skill}
      </li>
    ))}
  </ul>
)

export default SkillGroup
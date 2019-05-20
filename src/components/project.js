import React from 'react'

import Img from "gatsby-image"
import SkillGroup from './skill-group'
import NetworkLink from './network-link'

import './project.scss'

import githubImg from '../images/icons/github.png'
import websiteImg from '../images/icons/website.png'

const imgUrls = {
  github: githubImg,
  website: websiteImg
}


const Project = ({ projectId, title, description, techDescription, projectDates, skillGroups, networkLinks, imgData }) => (
  <article id={projectId} className="col-12 project-article">
    <div className="row pro-title-row">
      <h3 className="col-12">
        {title}
      </h3>
    </div>
    <div className="row proj-main-row">
      {imgData &&
        <div className="col-12 image-wrap">
          <Img fluid={imgData} />
        </div>
      }
      <p className="col-12 proj-dates">
        {projectDates}
      </p>
      <p className="col-12">
        {description}
      </p>
      <p className="col-12">
        {techDescription}
      </p>
      <div className="col-12 proj-skills">
        {skillGroups.map((skillGroup, index) => (
          <SkillGroup key={index} {...skillGroup} />
        ))}
      </div>
    </div>
    <div className="row proj-skills-det-row">
      <div className="col-12 col-lg-4">
        <ul className="row">
          {networkLinks.map((networkLink, index) => (
            <NetworkLink key={index} {...networkLink} img={imgUrls[networkLink.imgUrl]} />
          ))}
        </ul>
      </div>
      {/* <div className="col-12">
        <a>
          View project details
        </a>
      </div> */}
    </div>
  </article>
)

export default Project
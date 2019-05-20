import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import NetworkLink from "../components/network-link"

import githubImg from '../images/icons/github.png'
import linkedinImg from '../images/icons/linkedin.svg'
import upworkImg from '../images/icons/upwork.svg'

import './footer.scss'

const imgUrls = {
  github: githubImg,
  linkedin: linkedinImg,
  upwork: upworkImg
}

const Footer = () => (
  <StaticQuery
    query={graphql`
    query {      
      allNetworkLinksJson {
        edges {
          node {
          imgUrl
            url
          } 
        }
      }
    }
    `}
    render={data =>
      <footer className="container-fluid">
        <div className="col-12 profile-links-ul">
          <ul className="row">
            {data.allNetworkLinksJson.edges.map(({ node }, index) => (
              <NetworkLink key={index} {...node} img={imgUrls[node.imgUrl]} />
            ))}
          </ul>
        </div>
        <div className="footer-text">
          <a href="mailto:santibelca@gmail.com">
            santibelca@gmail.com
        </a>
        </div>
        <div className="footer-text">Icons made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a>, <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> and <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        <div className="footer-text">
          Copyright © santibelca.com 2019
        </div>
      </footer>
    }
  />
)

export default Footer
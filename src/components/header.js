import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import NetworkLink from "../components/network-link"

import githubImg from '../images/icons/github.png'
import linkedinImg from '../images/icons/linkedin.svg'
import upworkImg from '../images/icons/upwork.svg'

import './header.scss'

const imgUrls = {
  github: githubImg,
  linkedin: linkedinImg,
  upwork: upworkImg
}

const Header = () => (
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
      <header className="container-fluid">
        <div className="row">
          <h1 className="col-12 col-lg-7">
            <Link to="/">
              Santiago Beltrán Caicedo
          </Link>
          </h1>
          <div className="col-12 col-lg-5">
            <ul className="row">
              {data.allNetworkLinksJson.edges.map(({ node }, index) => (
                <NetworkLink key={index} {...node} img={imgUrls[node.imgUrl]} />
              ))}
            </ul>
          </div>
        </div>
      </header>
    }
  />
)

export default Header

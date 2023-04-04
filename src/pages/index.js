import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import ProjectNav from "../components/project-nav"
import Project from "../components/project"

import './index.scss'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        me: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background: file(relativePath: { eq: "lotsacodeblury-short.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allProjectsJson {
          edges {
            node {
              title
              projectId
              mainTechs
              description
              techDescription
              projectDates
              skillGroups {
                category
                skills
              }
              networkLinks {
                imgUrl
                url
              }
            } 
          }
        }
        collabide: file(relativePath: { eq: "screenshots/collabide.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        moncrud: file(relativePath: { eq: "screenshots/moncrud.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pitchdb: file(relativePath: { eq: "screenshots/pitchdb.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sparkfive: file(relativePath: { eq: "screenshots/sparkfive.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        trymetric: file(relativePath: { eq: "screenshots/trymetric.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        walkingroutes: file(relativePath: { eq: "screenshots/walkingroutes.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        queueserver: file(relativePath: { eq: "screenshots/queueserver.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }              
      }
    `}
    render={data =>
      <Layout>
        <SEO title="Santiago Beltran" keywords={[`software developer`, `node`, `portfolio`, 'full-stack', 'web app']} />
        <main className="container-fluid">
          <section className="row intro-section">
            <div className="col-12">
              <BackgroundImage Tag="section"
                fluid={data.background.childImageSharp.fluid}
                className={'background-img'}
              >
                <div className="row intro-content">
                  <div className="offset-2 col-8 offset-lg-0 col-lg-3 image-wrap">
                    <Img alt={"santiago beltran"} fluid={data.me.childImageSharp.fluid} />
                  </div>
                  <p className="col-12 col-lg-9 name-desc-wrap">
                    Software engineer with over 6 years of experience building enterprise, mobile and web applications, big and small.
                    <br />
                    <br />
                    I've worked in many environments, taking on the role of team member, solo developer, mentor and have been able to be effective in all of these situations.
                  </p>
                </div>
              </BackgroundImage>
            </div>
          </section>

          <section className="row projects-nav-section">
            <h2 className="col-12">
              What have I worked on?
            </h2>
            <div className="col-12">
              <ul className="row projects-nav-ul">
                {data.allProjectsJson.edges.map(({ node }, index) => (
                  <ProjectNav key={index} projectId={node.projectId} title={node.title} mainTechs={node.mainTechs} />
                ))}
              </ul>
            </div>
          </section>
          <section className="row projects-section">
            {data.allProjectsJson.edges.map(({ node }, index) => (
              <Project key={index} {...node} imgData={data[node.projectId] ? data[node.projectId].childImageSharp.fluid : null} />
            ))}
          </section>
        </main>
      </Layout>
    }
  />
)

export default IndexPage

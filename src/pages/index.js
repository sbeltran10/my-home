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
        walkingroutes: file(relativePath: { eq: "screenshots/walkingroutes.png" }) {
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
                  <div className="offset-2 col-8 offset-sm-0 col-sm-2 image-wrap">
                    <Img alt={"santiago beltran"} fluid={data.me.childImageSharp.fluid} />
                  </div>
                  <p className="col-12 col-sm-10 name-desc-wrap">
                    Software Engineer with a focus on web development, from requirements gathering to deployment in a production environment.
              </p>
                </div>
              </BackgroundImage>
            </div>
          </section>

          <section className="row projects-nav-section">
            <h2 className="col-12">
              What have I built?
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

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NetworkLink from "../components/network-link"
import ProjectNav from "../components/project-nav"
import Project from "../components/project"

const networkLinks = []
const projects = []

const IndexPage = () => (
  <Layout>
    <SEO title="Santiago Beltran" keywords={[`software developer`, `node`, `portfolio`, 'full-stack', 'web app']} />
    <main className="container-fluid">
      <section className="row">
        <div className="col-12 image-wrap">
          <Image />
        </div>
        <div className="col-12 name-desc-wrap">
          <h1>
            Santiago Beltrán Caicedo
          </h1>
          <p>
            Software Engineer with a focus on web development, from requirements gathering to deployment in production.
          </p>
        </div>
        <ul className="col-12 profile-links-ul">
          {networkLinks.map((network, index) => (
            <NetworkLink key={index} {...network} />
          ))}
        </ul>
      </section>
      <section className="row">
        <h2 className="col-12">
          What have I built?
        </h2>
        <ul className="col-12 projects-nav-ul">
          {projects.map((project, index) => (
            <ProjectNav key={index} projectId={project.projectId} title={project.title} mainTechs={project.mainTechs} />
          ))}
        </ul>
      </section>
      <section className="row">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </main>
  </Layout>
)

export default IndexPage

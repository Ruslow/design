import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Survey,
  Slider,
  GridProjects,
} from '../components'
import Seo from '../components/Seo'

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes },
  } = data
  return (
    <Layout>
      <Seo title="Home" description="this is home page" />
      <Hero />
      <About />
      <GridProjects projects={projects} title="latest projects" />
      {/* <Projects projects={projects} title="latest projects" /> */}
      <Survey />
      <Slider customers={nodes} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
      limit: 4
    ) {
      nodes {
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 150
                  height: 150
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
        id
      }
    }
  }
`

export default HomePage

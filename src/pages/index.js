import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

console.log("home")

const Home = (props) => {
  return (
    <Layout bodyClass="page-home">
      <div className="divImage">
        <div className="background-image">
          <div className="content">
            <h2>¡NOS CASAMOS!</h2>
            <h4>SAVE THE DATE 18/06/2022</h4>
          </div>
        </div>
      </div>
      <div className="contentPortada" id="portada">
        <h2>¡Bienvenidos a la web de nuestra boda!</h2>
        <p>
          Estamos ilusionados de poder compartir un día tan especial con
          vosotros. <br></br>
          En esta página iremos incorporando información útil sobre la boda como
          el lugar de celebración, horarios y recomendaciones para ayudaros a
          disfrutar al máximo del gran evento.<br></br>
          Para cualquier duda que os surja, estaremos encantados de que os
          pongáis en contacto con nosotros:
        </p>
        <ul>
          <li>
            <strong>Fernando Muñoz - email - tlf</strong>
          </li>
          <li>
            <strong>Cris XXx - email - tlf</strong>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/content/index.md/" }) {
      html
      frontmatter {
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
    features: allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;

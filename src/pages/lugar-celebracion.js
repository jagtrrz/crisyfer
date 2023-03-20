import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import Map from "../components/GoogleMap";


const Home = (props) => {
  return (
    <Layout bodyClass="page-home">
      <div className="containerLugarCelebracion" id="celebracion">
        <h2>¿Dónde lo vamos a celebrar?</h2>
        <div className="containerMap">
          <div className="map">
            <Map />
          </div>
          <div className="pAndImage">
            <div className="imageChurch">
              <div className="background-image-church"></div>
              <div className="background-image-castle"></div>
            </div>

            <p>
              La ceremonia religiosa tendrá lugar a las 12:30 en <strong>La Ermita 
              de Nuestra Señora de los Recuerdos </strong> que se encuentra en Carr. 
              Guadalix, 5, 28794 Colmenar Viejo, Madrid, para continuar con 
              la celebración en la <strong>Finca Las Jarillas</strong> situada en la carretera M-607, 
              Km 19, 900, 28049 Madrid. En el mapa tenéis la dirección de ambos 
              lugares por si necesitáis usar GPS.
            </p>
          </div>
        </div>
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

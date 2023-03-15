import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Home = (props) => {
  return (
    <Layout bodyClass="page-home">
      <div className="contentListaBodas" id="lista">
        <div className="listaText">
          <p className="h3Listas">
            Para nosotros, el mejor regalo es que nos acompañéis en un día tan
            especial y si, aun así, queréis ayudarnos a que comencemos esta gran
            aventura juntos, aquí tenéis nuestro número de cuenta:
          </p>
          <h2>ES03 0049 3667 3721 1420 7775</h2>
          <h2>¡Muchísimas gracias!</h2>
        </div>
        <div className="listaImage">
          <div className="background-image-lista"></div>
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

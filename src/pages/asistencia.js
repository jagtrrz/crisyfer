import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const formKey = `https://www.flexyform.com/f/3bd9d25ba71a4ed8e715bc06868da13f1343e16f`;

const Home = (props) => {
  return (
    <Layout bodyClass="page-home">
      <div className="containerAsistencia" id="contact">
        <h2>¿Nos confirmas tú asistencia?</h2>
        <p>
          Nos encantará veros en nuestra boda. ¡Estamos deseando que llegue ya
          el día! <br></br>
          En esta sección os pedimos que confirméis vuestra asistencia a la
          boda, con quien venís y si tenéis alguna alergia o intolerancia, así
          como si sois vegetarianos.
        </p>
        <div className="contactForm">
          <ContactForm action={formKey} />
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

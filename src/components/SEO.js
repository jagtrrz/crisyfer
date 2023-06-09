import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = (props) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={title}
          titleTemplate="Cris & Fer"
          link={[{ rel: "shortcut icon", type: "image/png", href: `` }]}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

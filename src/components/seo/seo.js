import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import seoimage from "../../../static/images/uploads/Nurse.jpg";

export default function Seo({
  title = "",
  description = "",
  pathname = "",
  children = null,
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleDefault
          siteUrl
          hrefLang
          siteDescription
        }
      }
    }
  `);

  const { siteTitle, siteTitleDefault, siteUrl, siteDescription, hrefLang } =
    siteMetadata;

  const seo = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : siteUrl,
    image: `${siteUrl}${seoimage}`,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitleDefault}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={hrefLang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* The following meta tag is for demonstration only and can be removed */}
      {!!process.env.GATSBY_DEMO_STORE && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      {children}
    </Helmet>
  );
}

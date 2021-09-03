import React, { Fragment } from "react";

import { useStaticQuery, graphql } from "gatsby";

const Cv = (props) => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fields: { collection: { eq: "cv" } }) {
          id
          frontmatter {
            education {
              qualification
              date
              school
            }
            groupexhibitions {
              date
              space
              location
              title
            }
            soloexhibitions {
              date
              space
              location
              title
            }
            prizes {
              date
              title
            }
            publications {
              date
              title
            }
          }
        }
      }
    `
  );

  return (
    <div className="cv">
      <section>
        {/* Education */}
        <span>
          <b>Education</b>
        </span>
        <div className="cv-education">
          {markdownRemark.frontmatter.education.map((item, i) => (
            <Fragment key={i}>
              <p>
                {item.school} {item.qualification}
              </p>
              <p>{item.date}</p>
            </Fragment>
          ))}
        </div>
      </section>
      {/* Solo Exhibitions */}
      <section>
        <span>
          <b>Solo Exhibitions</b>
        </span>
        <div className="cv-inner">
          {markdownRemark.frontmatter.soloexhibitions.map((item, i) => (
            <Fragment key={i}>
              <p>{item.date}</p>
              <p>
                {item.title} <b>{item.space}</b>, {item.location}
              </p>
            </Fragment>
          ))}
        </div>
      </section>
      {/* Solo Exhibitions */}
      <section>
        <span>
          <b>Group Exhibitions</b>
        </span>
        <div className="cv-inner">
          {markdownRemark.frontmatter.groupexhibitions.map((item, i) => (
            <Fragment key={i}>
              <p>{item.date}</p>
              <p>
                {item.title} <b>{item.space}</b>, {item.location}
              </p>
            </Fragment>
          ))}
        </div>
      </section>
      {/* Prizes */}
      <section>
        <span>
          <b>Prizes</b>
        </span>
        <div className="cv-education">
          {markdownRemark.frontmatter.prizes.map((item, i) => (
            <Fragment key={i}>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </Fragment>
          ))}
        </div>
      </section>
      {/* Publications */}
      <section>
        <span>
          <b>Publications</b>
        </span>
        <div className="cv-education">
          {markdownRemark.frontmatter.publications.map((item, i) => (
            <Fragment key={i}>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cv;

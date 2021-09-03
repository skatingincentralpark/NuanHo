import React from "react";

import { useStaticQuery, graphql } from "gatsby";

const CV = (props) => {
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
            exhibitions {
              date
              location
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
          {markdownRemark.frontmatter.education.map((item) => (
            <>
              <p>
                {item.school} {item.qualification}
              </p>
              <p>{item.date}</p>
            </>
          ))}
        </div>
      </section>
      {/* Solo Exhibitions */}
      <section>
        <span>
          <b>Solo Exhibitions</b>
        </span>
        <div className="cv-inner">
          <p>2019</p>
          <p>
            (De)faced, <b>Sheffer Gallery</b>, Sydney
          </p>
        </div>
      </section>
      {/* Solo Exhibitions */}
      <section>
        <span>
          <b>Group Exhibitions</b>
        </span>
        <div className="cv-inner">
          <p>2019</p>
          <p>
            (De)faced, <b>Sheffer Gallery</b>, Sydney
          </p>
          <p>2019</p>
          <p>
            2019 Invitational, <b>Home735 Gallery</b>, Sydney
          </p>
          <p>2019</p>
          <p>
            Group Show, <b>Home735 Gallery</b>, Sydney
          </p>
          <p>2019</p>
          <p>
            Accelerating the Fractured Whereabouts, <b>Freda's</b>, Sydney
          </p>
        </div>
      </section>
      {/* Prizes */}
      <section>
        <span>
          <b>Education</b>
        </span>
        <div className="cv-education">
          <p>Troy Quinliven Exhibition Prize</p>
          <p>2018</p>
        </div>
      </section>
      {/* Publications */}
      <section>
        <span>
          <b>Publications</b>
        </span>
        <div className="cv-education">
          <p>Art Edit Magazine Winter Issue</p>
          <p>2021</p>
        </div>
      </section>
    </div>
  );
};

export default CV;

import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const HeaderPopup = (props) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (props.isLocked) {
      // document.getElementsByTagName("html")[0].style.overflow = "hidden";
      // document.getElementsByTagName("html")[0].style.position = "fixed";
      disableBodyScroll(targetRef.current);
    } else {
      enableBodyScroll(targetRef.current);
      // document.getElementsByTagName("html")[0].style = "";
      // document.getElementsByTagName("html")[0].style = "";
      props.showNavHandler();
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [props]);

  const { about } = useStaticQuery(
    graphql`
      query MyQuery {
        about: allMarkdownRemark(
          filter: { fields: { collection: { eq: "about" } } }
          sort: { fields: frontmatter___location, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                bio
                date(formatString: "YYY")
                email
                instagram
                location
              }
              fileAbsolutePath
            }
          }
        }
      }
    `
  );

  return (
    // <div className="header-info" ref={targetRef}>
    <div className="test-modal">
      <div className="test-modal-inner" ref={targetRef}>
        <p>
          E: {about.edges[0].node.frontmatter.email}
          <br />
          IG: {about.edges[0].node.frontmatter.instagram}
          <br />
          Location: {about.edges[0].node.frontmatter.location}
        </p>
        <p className="bio">{about.edges[0].node.frontmatter.bio}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
          error rem ducimus quae, dolorum autem cupiditate nobis ex laboriosam a
          pariatur accusantium quam sequi, quas distinctio! Commodi, amet.
          Culpa! Nostrum sit, voluptatum aut aperiam sunt error optio atque fuga
          totam incidunt? Rem dolore, sit ratione harum vero deleniti beatae, ea
          nostrum laboriosam illum pariatur? Possimus sint praesentium maiores
          pariatur. Esse reiciendis neque aspernatur id minus. Odio dolore
          suscipit modi, laboriosam sit architecto minus at deleniti reiciendis
          fugiat possimus et deserunt esse, officiis dolores nesciunt cumque
          optio sint magnam aperiam. Officiis vitae recusandae vero repellat,
          enim totam pariatur accusantium alias provident rem necessitatibus
          quibusdam quasi sunt, aperiam tempora laboriosam aspernatur
          consequuntur itaque, corporis porro! Fuga nisi voluptas accusantium
          porro qui? Ullam porro officiis quod sunt reprehenderit, beatae nemo
          ea? Amet, cupiditate odio quaerat iusto facere ducimus deleniti
          repudiandae deserunt doloribus laudantium! Cum, recusandae earum.
          Facere nulla iusto nihil ex saepe. Vitae soluta molestiae
          exercitationem aspernatur nam officia ea eius sint ad voluptas
          corrupti, dolorum repudiandae eaque recusandae ratione quia facilis
          ipsam maiores consequatur veritatis necessitatibus cum debitis porro
          reprehenderit. Quos. Nobis, beatae? Debitis doloremque nulla in
          repellendus dolor alias vitae, odio iure, recusandae quasi pariatur
          dicta ullam ipsam eos molestias, ipsa labore possimus consectetur nam
          aspernatur tempore ut nemo laudantium. Recusandae architecto quis enim
          quod laborum voluptatum commodi, accusamus iste eius velit laudantium
          beatae blanditiis soluta dicta magnam ipsa deleniti ducimus totam
          aspernatur modi numquam maxime, suscipit quos veniam. Reprehenderit.
          Veniam expedita odio, impedit quasi assumenda doloremque voluptatibus
          doloribus nihil quibusdam unde excepturi nulla vero dolorem
          consequuntur? Similique quam quia debitis eos? Expedita dolorum
          dignissimos culpa perspiciatis! Optio, blanditiis cumque. Quibusdam
          sed perspiciatis deserunt provident cumque quos earum fugiat aut quas
          consequuntur, repudiandae magni iusto odit, voluptatum consequatur
          similique sit vero ex. Explicabo perferendis deserunt officiis ab
          aliquam eveniet fugit. Quia excepturi libero quis modi autem
          cupiditate consequatur esse, dolore labore praesentium nihil facere
          dignissimos aspernatur ex nesciunt obcaecati fuga ullam cumque natus
          ducimus officiis. Eaque suscipit odit quam omnis. Magni repudiandae
          dolore fugit, fuga natus eius cum consequatur, ipsa provident debitis
          nulla, impedit sint non qui. Perspiciatis ratione amet magni. Ex
          numquam debitis officia quos? Maiores facilis cumque dicta. Placeat
          ipsum alias quasi quod vel est voluptatum! Pariatur, ipsam sit animi
          commodi molestiae voluptas voluptate placeat reprehenderit dolores
          odio numquam, voluptatibus nesciunt tenetur enim ad laudantium, fugit
          culpa cum. Odio nesciunt id laudantium eveniet voluptatum itaque nemo,
          quaerat praesentium explicabo reprehenderit eius libero perferendis,
          sint aspernatur. Fugiat enim voluptatibus recusandae porro maiores
          explicabo sunt quam? Accusantium corrupti unde velit. Delectus
          molestiae deserunt nulla omnis natus distinctio aperiam aut mollitia
          fugit, ad quibusdam eveniet beatae? Aut, adipisci! Officiis
          voluptatibus, consequatur esse officia quaerat delectus doloremque
          iste dolores, a ratione ipsa! Corporis incidunt id atque totam eaque
          veniam laboriosam natus voluptates et ratione non, sunt aperiam.
          Adipisci, veniam dicta! Dolorem obcaecati reiciendis molestias facilis
          nisi corporis, error asperiores assumenda quos suscipit? Placeat atque
          dicta id cumque? Saepe dolorum eum reprehenderit porro laborum tempore
          exercitationem aperiam neque, nihil ullam laudantium expedita ipsam
          modi, id magnam harum aspernatur amet voluptatibus quaerat eaque
          inventore? Perferendis distinctio molestiae magni similique veniam
          sunt ipsam odit molestias repellat laboriosam, neque fugit, rem
          aperiam natus, earum eos consequuntur praesentium quisquam consectetur
          minima. Modi, quaerat aliquid. Facere, eligendi consequuntur!
          Blanditiis assumenda provident expedita minus similique perspiciatis
          numquam magnam, iure labore unde deserunt itaque sed laborum omnis
          nobis corporis aliquam voluptatibus id, est ullam sapiente
          consequuntur enim voluptates? Tempora, corporis? Error dolorem qui
          inventore vero itaque ipsam quibusdam omnis, ut molestiae rerum aut,
          delectus, dolores harum. Vero neque reprehenderit veritatis nobis est,
          aliquid quam quasi esse earum ipsa veniam velit. Quia pariatur quas
          at, tempora error fugiat vitae aut dolorum officia, assumenda quae
          asperiores ullam eveniet excepturi nemo sit nam alias, repudiandae
          praesentium qui unde doloremque. Deserunt architecto ipsum quis.
          Laudantium, nostrum odit cupiditate exercitationem illum maxime
          mollitia? Distinctio itaque eos laboriosam. Voluptatibus voluptatem
          accusantium iusto beatae cupiditate eligendi, eum eius doloremque,
          atque, perferendis placeat omnis nemo repellat vel eaque? Quas modi
          corporis alias accusantium quibusdam atque culpa debitis optio,
          temporibus cumque laudantium omnis facere vero quae exercitationem
          error, repellat reiciendis quos magnam velit. Est perferendis
          aspernatur beatae adipisci aut. Voluptates labore laborum quisquam
          nulla delectus sed, sequi eveniet provident nisi soluta laboriosam cum
          odio aut illum ab fugiat ducimus nobis earum accusantium modi commodi
          saepe. Autem nam natus quam. Perferendis quidem perspiciatis ad
          molestiae, blanditiis, quo non vel aspernatur id ea corrupti eligendi
          voluptatibus hic cumque, commodi impedit ut iusto. Consequatur
          pariatur laborum laboriosam. Voluptatibus sed non repellat sequi.
          Commodi veniam, modi inventore alias aliquam illum saepe amet!
          Quisquam aspernatur nihil deserunt consectetur, iste mollitia
          perspiciatis temporibus neque id earum alias doloribus, a non labore
          similique amet molestias. Consequuntur. Voluptas, incidunt aspernatur
          neque saepe rem quaerat excepturi iure repudiandae itaque impedit
          error, perspiciatis nam consequatur assumenda alias quod, temporibus
          nesciunt necessitatibus omnis magnam obcaecati dolore enim? Iste,
          harum esse? Cum assumenda distinctio iure. Adipisci natus vel, magni
          sequi ea aliquid quidem iure, velit necessitatibus tempora rerum iste
          quia mollitia. Eaque voluptatum repudiandae tenetur pariatur libero et
          iste ratione alias! Velit, delectus unde dolorem ex tempora autem
          placeat reiciendis ducimus ad nemo, repudiandae voluptate adipisci?
          Velit excepturi rerum perferendis architecto ab ut id, sunt
          voluptatibus nostrum natus fugiat, sit molestias? Alias illum facilis
          nesciunt, cupiditate hic ullam atque assumenda iusto sequi, repellat
          at id nostrum eum vero modi ratione fugit repellendus molestias ut
          dicta vel quas quaerat provident blanditiis? Vitae.
        </p>
        <p className="copyright">Nuan Ho © 2021 - Site by NakedLunch</p>
      </div>
    </div>
  );
};

export default HeaderPopup;

import React from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useEmblaCarousel } from "embla-carousel/react";

import LightboxInfo from "./lightboxInfo";

const Lightbox = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    containScroll: "trimSnaps",
    loop: true,
  });

  const increase = () => {
    emblaApi.scrollNext();
    props.increase();
  };
  const decrease = () => {
    emblaApi.scrollPrev();
    props.decrease();
  };

  return (
    <div className={classes.lightboxContainer}>
      <div className={classes.lightbox_buttons}>
        <button onClick={decrease} className="btn">
          prev
        </button>
        <button onClick={increase} className="btn">
          next
        </button>
        <button onClick={props.hide} className="btn">
          [close]
        </button>
      </div>

      <div className={classes.lightbox}>
        {/* <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {props.fullSizeData.map((edge, i) => (
              <div key={i} className="embla__slide">
                <GatsbyImage
                  image={getImage(edge.node.frontmatter.image)}
                  alt={edge.node.frontmatter.title}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div> */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam!
        Atque, dolorum saepe commodi consectetur deserunt ipsa nemo corporis sit
        distinctio dolore rem, odit sed doloremque perspiciatis deleniti dicta
        tenetur. Laboriosam dolorum similique, accusantium sit nobis soluta
        incidunt libero vero perspiciatis, praesentium harum natus illo minus ab
        ipsum illum aperiam rem esse laudantium. Sed dolores temporibus libero
        reprehenderit, magnam odit. Quae facere eveniet temporibus numquam amet
        sunt ipsam eos, beatae expedita veritatis quasi laboriosam, delectus
        illum ad ullam necessitatibus rerum a libero recusandae aliquid
        doloribus consequatur, corporis dolore nesciunt? Aut. Eos soluta dicta
        atque provident itaque libero, reiciendis deserunt earum, illo
        necessitatibus ducimus sed velit tempora! Vero nisi totam nulla magnam
        explicabo illo sunt fuga. Eligendi neque earum at repellendus! Nam
        voluptas debitis vitae aliquid a error sed modi necessitatibus
        temporibus, iure, consequuntur aspernatur placeat aut. Pariatur natus,
        quis id quas commodi a. Consequatur facilis ipsam nobis libero, alias
        minima. Rem dolores consectetur, distinctio totam accusamus officiis
        veritatis repellat minus dolorum labore excepturi cumque architecto iure
        blanditiis, ipsum non illo vitae autem, mollitia voluptatem doloribus
        laborum possimus nisi. Eius, incidunt. Corrupti tempore inventore
        temporibus illum vitae. Quas illum quis perspiciatis iusto facilis.
        Corrupti magni hic ut dicta accusantium atque harum beatae nam
        repellendus iure dolorem id dolore, illo deleniti autem! Optio, dolore?
        Nam ea, perspiciatis voluptatibus excepturi itaque cumque reprehenderit
        eveniet, explicabo omnis quisquam saepe optio totam neque quam dolorum
        cum exercitationem fugiat nesciunt. Tempore recusandae odit obcaecati
        rerum commodi? Aut sapiente perferendis error incidunt nulla, quisquam
        tenetur nobis reprehenderit vitae voluptates a suscipit modi eius eaque
        saepe optio fuga assumenda repudiandae dolor, in natus accusamus hic!
        Velit, quod earum. Quaerat laudantium consectetur ducimus nemo?
        Doloribus, dolor eaque illo voluptates excepturi facere commodi sapiente
        adipisci optio nulla incidunt cumque dolores fugiat. Consequatur numquam
        magnam maxime accusantium porro earum quae in. Voluptatem tenetur unde
        modi est in autem facilis consequuntur enim ipsam qui. Recusandae cum
        ipsum repellendus commodi alias eveniet. Dolor, alias fugiat ab est
        laboriosam qui animi rerum aspernatur odio! Earum perspiciatis officiis,
        quasi magnam et minima id quae a assumenda, aperiam ullam quo. Neque,
        officia. Magnam, autem, ea beatae enim odio debitis impedit, ut quo
        omnis illum quam ratione. Aut hic adipisci provident officia voluptatum
        laborum dolore praesentium saepe atque quisquam, in excepturi tempore
        ullam, ab ratione corporis eos maiores. Officia eum iste consequatur
        perferendis pariatur, ducimus quos vitae? Repellendus repudiandae iure
        laboriosam est praesentium ad non eveniet numquam a eligendi omnis
        reiciendis sint veritatis explicabo nihil velit ratione corrupti, eius
        deleniti autem exercitationem saepe incidunt dignissimos rem! Fuga!
        Cupiditate beatae consectetur rerum eveniet aut ea incidunt, unde
        explicabo dolorum, odit sapiente libero molestias cum corrupti minus
        aliquam veritatis quaerat, eaque eligendi doloribus. Quasi quibusdam
        corrupti id laboriosam quod! Facere quidem accusamus perspiciatis natus
        quod nihil harum esse illo, dicta, fugit temporibus consectetur illum!
        Assumenda possimus, aut labore velit dolorum ipsa saepe repellendus
        placeat, ut neque vitae fugit illo? Fuga, ullam similique illo in
        laborum ad? Saepe facere tempora facilis deleniti dolor aliquam
        perferendis autem voluptatum repellendus tenetur, magnam consequuntur
        quam! Mollitia, optio. Quia necessitatibus maiores earum mollitia
        itaque. Vel, doloremque! Quaerat sunt aliquam, assumenda accusamus iure
        perspiciatis sequi, cum obcaecati sed quae distinctio ipsa similique
        numquam autem voluptate dicta officiis eaque. Atque accusamus dicta aut
        earum deserunt architecto! Minus labore illum voluptate eum in nulla
        consectetur ipsum rem deleniti! Minus quidem voluptatibus veniam dolorem
        eveniet eaque rem aspernatur deserunt, sit distinctio consequuntur
        fugit, obcaecati nobis sed praesentium sequi! Tempora officiis sequi
        maxime beatae excepturi debitis, necessitatibus expedita qui cupiditate
        enim! Eveniet ab esse consectetur! Minima in voluptas ad odit, nostrum
        ratione perspiciatis, est unde dolor ducimus delectus quo.
      </div>

      {emblaApi && (
        <LightboxInfo
          frontmatter={props.fullSizeData[props.currIndex].node.frontmatter}
        />
      )}
      <div className={classes.backdrop} />
    </div>
  );
};

export default Lightbox;

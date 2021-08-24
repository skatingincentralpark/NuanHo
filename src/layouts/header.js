import React, { useState, useRef } from "react";

import { Link } from "gatsby";

import HeaderPopup from "./headerPopup";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = ({ location }) => {
  const targetRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    // if (showNav) {
    //   enableBodyScroll(targetRef);
    // } else {
    //   disableBodyScroll(targetRef);
    // }
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="header-inner">
          <button onClick={showNavHandler} className="btn">
            [info]
          </button>
          {location.pathname === "/" ? (
            <Link className="nav-btn" to="/archive">
              [archive]
            </Link>
          ) : (
            <Link className="nav-btn" to="/">
              [home]
            </Link>
          )}
        </div>
      </header>
      {/* {showNav && <HeaderPopup ref={targetRef} />} */}
      {showNav && (
        <div
          className="test-modal"
          // ref={targetRef}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            deserunt quod. Esse soluta commodi repudiandae. Voluptatem
            cupiditate porro dolores est itaque sit enim atque dolorem. Sunt at
            ratione in magnam! Rerum, ab. Asperiores quis at unde quae minus
            modi consequatur, ullam dolores inventore repellendus officia
            veritatis dolor dolore quas. Error aut molestiae tenetur corrupti
            quam beatae illo, eos dolore magnam! Expedita quidem voluptas maxime
            eius deleniti consectetur voluptatum eum natus! Magni molestias
            minima explicabo, aut quia fugiat quaerat eligendi ea illum iure
            tempora ipsa at, necessitatibus tenetur fuga odit totam. Cum, velit
            numquam quaerat cupiditate hic error qui aperiam. Similique,
            adipisci sit quidem ea iusto ex praesentium autem excepturi
            dignissimos libero veritatis reprehenderit suscipit, odio nisi.
            Deserunt odit quasi dolor. Magnam enim adipisci consequuntur minus
            obcaecati incidunt officia modi hic nemo voluptatem officiis vel
            corporis deleniti quod ea harum expedita eius quos quis, magni
            voluptatibus quaerat repellendus. Dicta, excepturi a? Quasi quo
            omnis neque recusandae quidem deleniti, maiores hic ut architecto
            quibusdam. Corporis itaque adipisci magnam debitis suscipit aperiam
            assumenda, reiciendis quasi, at earum alias quis eos deleniti.
            Eaque, perspiciatis. Sed ipsa enim, porro cum deserunt omnis vitae
            odio. Voluptatibus labore vitae expedita dolore, eum saepe quia nam
            fugit. Ea ex rerum aperiam? Doloribus cupiditate non quo, deleniti
            repellendus nihil. Assumenda mollitia cupiditate architecto sapiente
            vel ad tempora fugiat neque suscipit odio enim repellendus ut
            repudiandae nobis minus tenetur, corrupti natus officiis eligendi.
            Deleniti placeat quod assumenda asperiores quidem? Ipsa. Placeat
            eius inventore tempora neque id ipsam modi accusamus numquam magnam
            sapiente commodi, enim eos? Architecto, repellendus laborum
            doloremque perspiciatis, perferendis nesciunt, est voluptatem
            debitis eligendi quo placeat officiis magnam. Beatae asperiores
            numquam modi ut similique earum eos, cum expedita nihil laboriosam
            saepe officiis dolores ipsam sit velit, veniam doloribus ducimus
            ullam? Hic voluptates non repudiandae, fuga recusandae perspiciatis
            quo. Incidunt quae quasi illo ipsa eveniet distinctio, vero facere
            nesciunt perferendis, tempore quidem quia fugiat qui non itaque
            eius, repudiandae adipisci veniam officiis velit sint! Incidunt
            corporis porro modi reprehenderit. Iure odit corrupti quo sint
            temporibus aperiam modi numquam, mollitia pariatur. Pariatur
            distinctio a, eos atque sequi, minus officiis optio sit placeat
            itaque voluptatibus, praesentium veritatis sapiente. Cupiditate,
            molestias neque. Nesciunt sed aspernatur perferendis aliquid optio
            libero quibusdam quod, aperiam vitae quasi dolores repellendus quas
            iste exercitationem, vel culpa tenetur rerum laborum blanditiis
            provident? Facere, culpa cum. Labore, facere quidem. Natus adipisci,
            temporibus odit in provident eos culpa ex nulla aliquid placeat
            tenetur ipsa veniam, nobis quis enim. Nemo, neque doloremque
            incidunt architecto harum ipsa ducimus. Eaque provident ratione
            nulla? Fugit cupiditate tempore corporis vel autem? Ipsa aperiam
            repudiandae accusamus aliquam eos nostrum sapiente commodi ea
            debitis voluptatem ex dolorum quo repellendus asperiores mollitia
            optio, earum cumque est? Ducimus, laudantium. Voluptates accusantium
            deleniti quasi harum mollitia eum deserunt, nostrum voluptatibus ut
            consectetur natus libero illum eveniet autem obcaecati. Atque
            deleniti at error dolores nihil eligendi modi minus recusandae amet
            esse. Corporis et amet exercitationem quod, temporibus neque nihil
            debitis cum accusantium a eos porro. Sint officiis repudiandae
            quidem quis quo odio optio dignissimos praesentium! Ipsa vel debitis
            nisi doloribus fuga? Odio nam laboriosam optio fuga, facere
            distinctio consequatur dignissimos rem expedita vero at consectetur
            harum? Perferendis autem quibusdam, nam, vero eius tenetur minima
            corrupti tempore ullam in praesentium pariatur ratione! Odio
            consectetur molestias pariatur praesentium tempore quod repudiandae
            necessitatibus quasi adipisci, perspiciatis architecto officia
            aliquid asperiores numquam saepe atque officiis recusandae! Odio
            voluptatum inventore praesentium. Repellat obcaecati ea commodi
            itaque! Provident, sequi quisquam optio iusto dicta adipisci harum
            officiis numquam quam illo, magnam qui aliquam ipsa perspiciatis.
            Similique mollitia explicabo dolor saepe quidem corrupti neque
            voluptate nesciunt. Tenetur, quas saepe. A id quidem, accusamus
            perferendis omnis, cumque sunt unde laborum ex dolorem sit autem
            iste qui, maxime eius esse numquam aliquid consequatur libero
            commodi sed eligendi! Neque in facere ipsum. Adipisci magnam,
            quisquam cumque voluptatum, nostrum ducimus totam id, velit quia
            consectetur beatae veritatis sed incidunt illum neque harum tempora
            error reiciendis pariatur quod sint nemo veniam. Magnam,
            necessitatibus! Velit? Voluptatibus distinctio sequi id soluta error
            maxime fugiat vero minus aspernatur dolor adipisci beatae, dicta
            quia sit corporis necessitatibus quaerat doloribus eligendi quod.
            Ducimus quibusdam exercitationem similique incidunt autem quae.
            Blanditiis aperiam eligendi iusto qui id sapiente? Nostrum cumque ab
            voluptas temporibus itaque optio non excepturi possimus inventore
            tenetur natus voluptatum alias repellendus qui, est rerum hic quia
            dicta laudantium. Maxime dicta eos id facere nesciunt rem dolorum
            voluptatem voluptatum eveniet suscipit rerum excepturi aperiam quo
            inventore harum porro reprehenderit nam ea impedit ipsum, distinctio
            sed ut non adipisci. Accusantium! Adipisci, aspernatur inventore
            consequatur ullam animi soluta. Eveniet adipisci reiciendis, enim
            ullam quasi nesciunt vero autem corporis voluptates animi ea
            repellendus, beatae nisi itaque quibusdam corrupti asperiores quod
            commodi. Labore! Corrupti animi repudiandae nisi ullam qui eaque
            nulla. Beatae voluptates numquam ea, ullam sed labore molestiae
            accusantium eum quo ut ad omnis nobis, inventore, possimus esse?
            Amet cum sunt culpa? Possimus perspiciatis delectus laudantium
            temporibus aliquid aliquam! Labore rerum quisquam consequatur
            repellat expedita vitae dolor sit doloribus libero corrupti quia
            minus unde provident reiciendis esse sint qui veniam, tempore
            accusamus! Velit dignissimos ab placeat inventore temporibus
            obcaecati non quia ipsum! Nihil consequatur beatae aperiam omnis,
            repellat impedit repellendus voluptas ullam libero ratione cum
            placeat? Nemo quia ab tempora facilis dolor. Sapiente consequatur
            minus, maiores architecto fugiat velit veniam delectus aut modi
            libero nesciunt quas quidem illum ea molestias mollitia explicabo
            labore quo id nihil repudiandae corrupti hic. Tenetur, delectus
            unde? Dolores cupiditate quae adipisci veritatis! Saepe quis
            deserunt doloribus nobis labore aperiam illo tempore cumque dolores
            commodi autem laboriosam, officiis molestias, quas dignissimos
            itaque ab nam eum nostrum, accusamus ipsum. Ut quam iusto,
            repellendus cum velit, voluptates facere reiciendis laborum nulla
            eum nisi est id blanditiis tenetur aliquid vero! Aperiam voluptas
            eius facere, quo possimus voluptates explicabo at facilis quia!
            Ullam est illo modi perferendis, odit id voluptas pariatur, ipsa
            eligendi assumenda molestiae quae amet corporis. Possimus eum id
            saepe architecto beatae. Repellendus ipsa praesentium nulla minus
            dolorem. Asperiores, quasi? Quae quaerat nesciunt modi repellendus
            dolore neque, nemo, tempore quia nulla libero, incidunt maiores
            temporibus. Sint veniam vero beatae enim repellendus. Velit omnis
            doloribus ad hic dolor ut itaque dolorum. Consectetur quia pariatur
            facere, odit voluptate provident aspernatur officia! Voluptate
            dignissimos recusandae dicta distinctio eius rerum, provident
            mollitia saepe deserunt tempore. Magnam aliquid inventore quibusdam
            corrupti mollitia laborum, commodi dolores. Optio nemo numquam
            mollitia asperiores a maxime delectus? Quod, ut perferendis autem
            neque tenetur et, rem fuga veritatis, aliquid suscipit minus omnis
            repudiandae iusto cum velit sunt. Ab, ratione reprehenderit? Ipsam
            optio officiis hic magni necessitatibus, enim eligendi error atque,
            voluptas aut labore non aspernatur soluta itaque. Quisquam, animi
            expedita repellendus eos aut inventore vitae facere, exercitationem
            nesciunt rem odio. Ullam quod impedit aspernatur at voluptas iusto
            ipsum magnam minus, necessitatibus harum, praesentium omnis natus
            recusandae veritatis dignissimos nihil repellendus, dolore earum
            illo possimus tenetur quae? Ipsa doloremque accusantium perferendis.
            Quas ad fugit debitis aliquam odit sunt, nulla iusto suscipit
            distinctio praesentium nam libero, repudiandae temporibus unde,
            repellat doloribus aut accusamus nesciunt porro atque totam cum
            labore! Vel, voluptatibus harum. Excepturi, deserunt modi! Optio
            fugiat libero voluptates quas ea laboriosam exercitationem cum,
            alias explicabo tempore dicta facere dolor voluptatibus culpa ipsam
            quibusdam aliquid doloribus voluptatem ab. Ratione quo autem unde!
            Magni facilis odio earum praesentium, laborum cumque ratione
            repellat a recusandae quod aperiam eos officia autem aspernatur,
            beatae veritatis pariatur eius cum dolorem? Porro reprehenderit at
            labore sapiente fugiat voluptatibus. Facilis quos beatae delectus
            illo voluptas ad provident. Commodi id hic odio necessitatibus,
            repellendus, voluptatem at, obcaecati maiores accusamus repudiandae
            iste sint consectetur. Necessitatibus, repellendus doloribus odio
            debitis alias aspernatur. Illum, architecto? Tempore corporis minima
            cum optio eveniet ad, omnis, delectus ducimus quisquam amet iste,
            doloribus natus culpa atque ipsa aliquam. Adipisci hic minus neque
            quas obcaecati deleniti laborum exercitationem! Ducimus deleniti
            facilis dolore in delectus quae vel eius, quod est minima,
            recusandae ab eaque nemo voluptatum harum voluptatibus voluptates
            optio reprehenderit vero aut esse saepe alias? Inventore,
            exercitationem animi? Maiores nisi ex deserunt fuga repellat odit
            obcaecati id totam! Illo aliquam magni temporibus maiores, eius
            nulla quidem debitis laboriosam velit accusamus voluptatum
            blanditiis repellendus modi quos similique doloremque earum. Facilis
            inventore exercitationem ipsum, nostrum consectetur rerum tempore
            ipsam adipisci distinctio, dolorem enim dolore soluta modi. Impedit
            esse accusamus porro beatae odit, natus qui aspernatur consequuntur,
            voluptas iste voluptatum iure! Incidunt amet inventore, assumenda
            tempore unde sit sint nulla perspiciatis similique ratione? Sapiente
            consequuntur possimus et pariatur aliquid assumenda omnis architecto
            corrupti, quo similique fugiat dignissimos quisquam molestias sint
            explicabo. Laboriosam quaerat quod perspiciatis cum dolor ab quas
            dolorem totam nesciunt repellendus quam animi vitae facilis iste
            autem odit ad, minus aliquam! Iusto sequi soluta error animi quia
            quidem pariatur? Cum, amet? Facere laborum quibusdam neque
            perspiciatis corrupti mollitia in nobis fugit! Adipisci optio nobis
            provident soluta quidem reprehenderit repellat ea, minima eaque
            illum repudiandae, odit eius doloribus recusandae accusantium!
            Exercitationem, maiores? Possimus quis commodi magnam odio ipsam
            reprehenderit, explicabo alias harum quas eos illum minus
            temporibus, a sapiente ab. Porro, magnam earum. Eveniet, nihil!
            Quisquam facilis sapiente at odit?
          </p>
        </div>
      )}
    </>
  );
};

export default Header;

import React from "react";
import LeftNav from "../components/LeftNav";
import Footer from "../components/Footer";

const Services = () => {


  return (
    <div className="page-wrapper services">
      <LeftNav />
      <div className="content">
        <section className="service-wrap">
          <div className="simple-wrap">
            <img
              src="/img/shape/shape2.png"
              alt="shape img"
              className="simple-shape-3 rotate"
            />
            <div className="section-title">
              <span>Nos Services</span>
            </div>
          </div>
            <div className="p-1">
              <div className="service-card">
                <div className="service-info">
                  <div className="service-title">
                    <h3>Assist my thesis defense</h3>
                    <span>
                      <img src="/img/atd.png" alt="" />
                    </span>
                  </div>
                  <p>
                    Une fois en fin de cycle, tout étudiant est confronté au
                    test ultime qu'est la soutenance de thèse, la Structure met
                    donc en place différentes options pour vous aider dans cette
                    tâche.
                  </p>
                  <a href="/services/assist-my-thesis-defense">
                    <button className="btn border lm-btn">Voir plus</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="service-card">
                <div className="service-info">
                  <div className="service-title">
                    <h3>MeTree</h3>
                    <span>
                      <img src="./img/tree.png" alt="hd" />
                    </span>
                  </div>
                  <p>
                    Toujours dans la dynamique de créer une synergie entre les
                    acteurs du monde de la santé, nous avons mis en place un
                    noyau baptisé MeTree (mon arbre 🌳 santé). Son but est de
                    retracer le parcours académique de tous ceux qui sont ou
                    deviendront les héros des hôpitaux, des laboratoires, des
                    pharmacie et bien encore.{" "}
                  </p>
                  <a href="/services/metree">
                    <button className="btn border lm-btn">Voir plus</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="service-card">
                <div className="service-info">
                  <div className="service-title align-items-center">
                    <h3>Push my project</h3>
                    <span>
                      <img src="./img/icons/pushed-brands.svg" alt="hd" />
                    </span>
                  </div>
                  <p>
                    Conscient que l'entreprenariat est le nerf de la nouvelle
                    dynamique de ce monde, nous proposons nos services pour vous
                    aider à mener à bien vos projets.
                  </p>
                  <a href="/services/push-my-project">
                    <button className="btn border lm-btn">Voir plus</button>
                  </a>
                </div>
              </div>
            </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Services;

import React from "react";
import LeftNav from "../components/LeftNav";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="page-wrapper about">
        <LeftNav />
        <div className="content">
          <section className="hero simple-wrap">
            <img
              src="./img/shape/shape1.png"
              alt="shape img"
              className="simple-shape-1 bounce"
            />
            <div className="hero-content">
              <img src="./img/hero-bg.jpg" alt="ff" />
              <div>
                <h2 className="title">Leaft, l'arbre posé sur la terre santé</h2>
                <h4 className="desc">
                  Plateforme de diffusion d'informations et de communication
                  pour tous les étudiants en science de la santé, professionnels
                  de la santé et bien d'autres.
                </h4>
              </div>
            </div>
          </section>
          <div id="genese" className=" preview claire">
            <div className="preview-content">
              <div className="box-1">
                <div className="hov-img0">
                  <img src="/img/tree.png" alt="IMG" />
                </div>
              </div>
              <div className="box-2">
                <h3>Genèse</h3>
                <p>
                  Il s'agit d'un site étudiant mis en place par un collectif
                  d'étudiants en sciences médicales de Conakry. Il a pour but de
                  servir de plate-forme de diffusion d'information et de moyens
                  de communication pour les étudiants, les personnes du domaine
                  médical et tous les amoureux des sciences. Ce collectif
                  d'étudiants de coloration diverses se présentent comme un
                  organisme là pour structuré les échanges entre les différents
                  acteurs de la santé et pourquoi pas, les lié au reste du
                  monde. C'est dans cette veine que le site est assimilé à un arbre aux multiples
                  ramifications.
                </p>
              </div>
            </div>
          </div>
          <div id="objectifs" className=" preview claire">
            <div className="preview-content">
              <div className="box-1">
                <div className="hov-img0">
                  <img src="/img/cc.jpg" alt="IMG" />
                </div>
              </div>
              <div className="box-2">
                <h3>Objectifs</h3>
                <div className="more">
                  <h4>*Réunir</h4>
                  <p>
                    Qui que vous soyez, d'ou que vous soyez, ivoirien, guinéen,
                    comorien, camerounais, beninois ou autres; Que vous soyez en
                    médicine, en pharmacie ou autres; Vous êtes des acteurs de
                    sante ce qui fait de vous les bienvenues a la structure
                  </p>
                </div>
                <div className="more">
                  <h4>*Informer</h4>
                  <p>
                    Par notre voix, vous serez informer aussi bien sur
                    l’actualité de vos diffèrent établissement et association
                    que sur l’actualité général de l’univers de la sante.
                  </p>
                </div>
                <div className="more">
                  <h4>*Instruire</h4>
                  <p>
                    Pour favoriser l’ apprentissage et facilité la recherche
                    d’information, nous mettons a la disposition de tout
                    étudiants une bibliothèque de cours, d’exercice et de
                    devoir. Mais encore, des séminaire et concours pour affuter
                    les connaissant de chacun seront aussi organisé.{" "}
                  </p>
                </div>
                <div className="more">
                  <h4>*Guider</h4>
                  <p>
                    Par le biais de professionnels de sante, de devanciers et de
                    leur expériences, nous souhaitons enrichir et nourrir les
                    ambitions de tous mais surtout de montrer le chemin a
                    suivre.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="accessibilite" className=" preview claire">
            <div className="preview-content">
              <div className="box-1">
                <div className="hov-img0">
                  <img src="/img/qq.jpg" alt="IMG" />
                </div>
              </div>
              <div className="box-2">
                <h3>Accessibilité</h3>
                <p>
                  Penser pour plaire a tous, Structure n'est pas seulement
                  qu'une appication web mais une appication multiplateforme.
                  Aussi bien disponible sur navigateur que sur mobile, Androide
                  et Ios
                </p>
                <div className="more">
                  <div>
                    <h4 className="m-2">Telecharger maintenant</h4>
                    <a href="https://play.google.com/store/apps">
                      <img
                        src="/img/play-store.png"
                        alt="logo play-store"
                        className="ppo"
                      />
                    </a>
                    <a href="https://www.apple.com/app-store/" className="mx-2">
                      <img
                        src="/img/apple-store.png"
                        alt="logo apple-store"
                        className="ppo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="toile" className="preview">
            <img src="/img/rrr.png" alt="toile" className="w-100" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;

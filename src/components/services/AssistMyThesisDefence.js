import React from "react";
import LeftNav from "../LeftNav";

const AssisteMyThesisDefence = () => {
  return (
    <div className="page-wrapper services">
      <LeftNav />
      <div className="content">
        <div>
          <div className="preview">
            <div className="preview-content">
              <div className="box-1 order-2">
                <div className="hov-img0">
                  <img src="/img/td.png" alt="IMG" />
                </div>
              </div>
              <div className="box-2">
                <h3>Assist my thesis defense</h3>
                <p>
                  Une fois en fin de cycle, tout étudiant est confronté au test
                  ultime qu'est la soutenance de thèse. Cependant hormis la
                  connaissance de son sujet, une certaine maîtrise de l'outil
                  informatique est requise. Mais encore, du temps de la
                  dextérité sont souvent nécessaires pour la saisie, la mise en
                  forme et autres. Ainsi le programme que nous proposons est non
                  seulement profitable aux étudiants ayant des difficultés avec
                  l'outil informatique pour des tâches avancées comme l'analyse
                  de bases de donnée, mais aussi étudiants désireux d'avancer
                  plus vite dans leurs travail en confiant certaine tâche comme
                  la saisie de texte à nos services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="service-desc">
            <h2>Les offres</h2>
            <p>
              La structure met en place différentes options propice à chaque
              situation :
            </p>
            <ul className="content-feature-list style2 list-style">
              <li>
                <i className="ri-check-line"></i>- analyse de bases de données
              </li>
              <li>
                <i className="ri-check-line"></i>- saisie de text (formatage, mise
                en forme et autres)
              </li>
              <li>
                <i className="ri-check-line"></i>- accès aux archives
              </li>
              <li>
                <i className="ri-check-line"></i>- confection de brochure
              </li>
              <li>
                <i className="ri-check-line"></i>- intervention tuteur
              </li>
            </ul>
            <div className="container">
              <div className="row">
                <button className="btn border">Commencer</button>
              </div>
            </div>
            <h2>FAQs</h2>
            <div className="pp-faq-wrap">
              <details className="pp-faq">
                <summary>
                  <span>What should I wear for my thesis defense?</span>
                </summary>
                <p>
                  While most universities don&apos;t have specific rules on how
                  to dress for that event, do regard it with dignity and
                  respect. This one might be a no-brainer, but know that you
                  should dress as if you were on a job interview or delivering a
                  paper at a conference.
                </p>
              </details>
              <details className="pp-faq">
                <summary>
                  <span>
                    How can I deal with nerves before my thesis defense?
                  </span>
                </summary>
                <p>
                  It is completely normal to be nervous. Being well prepared can
                  help minimize your stress, but do know that your examiners
                  have seen this many times before and are willing to help, by
                  repeating questions for example if needed. Slow yourself down,
                  and take a deep breath.
                </p>
              </details>
              <details className="pp-faq">
                <summary>
                  <span>
                    What should I do if I can&apos;t answer a question during my
                    thesis defense?
                  </span>
                </summary>
                <p>
                  Your thesis defense is not about being perfect and knowing
                  everything, it&apos;s about how you deal with challenging
                  situations.
                  <a
                    href="https://jameshaytonphd.com/quick-tips/preparing-for-your-thesis-defence"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    James Hayton
                  </a>
                  writes on his blog that it is ok sometimes to just say &quot;I
                  don&apos;t know&quot;, but he advises to try something like
                  &quot;I don&apos;t know, but I would think [...] because of x
                  and y, you would need to do [...] in order to find out&quot;.
                </p>
              </details>
              <details className="pp-faq">
                <summary>
                  <span>
                    What should I do if technology fails me during my thesis
                    defense?
                  </span>
                </summary>
                <p>
                  Your Powerpoint presentation can get stuck or not look the way
                  it is supposed to do on the big screen. It can happen and your
                  supervisors know it. In general, handouts can always save the
                  day when technology fails.
                </p>
              </details>
              <details className="pp-faq">
                <summary>
                  <span>
                    What are some tips to help me prepare for my thesis defense?
                  </span>
                </summary>
                <p>
                  Here are a few tips on how to prepare for your thesis defense:
                </p>
                <ol>
                  <li>Anticipate questions and prepare for them</li>
                  <li>Dress for success</li>
                  <li>Delegate</li>
                  <li>Have a backup plan (in case technology fails you)</li>
                  <li>Deal with your nerves</li>
                </ol>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssisteMyThesisDefence;

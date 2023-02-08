import React from "react";
import LeftNav from "../LeftNav";

const MeTree = () => {
  return (
    <div className="page-wrapper services">
      <LeftNav />
      <div className="content">
        <div className="container">
          <div className="service-desc">
            <div className="preview">
              <div className="preview-content">
                <div className="box-1">
                  <div className="hov-img0">
                    <img src="/img/tree.png" alt="IMG" />
                  </div>
                </div>
                <div className="box-2">
                  <h3>MeTree</h3>
                  <p>
                    Toujours dans la dynamique de créer une synergie entre les
                    acteurs du monde de la santé, nous avons mis en place un
                    noyau baptisé MeTree (mon arbre 🌳 santé). Son but est de
                    retracer le parcours académique de tous ceux qui sont ou
                    deviendront les héros des hôpitaux, des laboratoires, des
                    pharmacie et bien encore.
                  </p>
                </div>
              </div>
            </div>
            <h2>les avantages</h2>
            <p>Ils s'agit d'offres independente, optionnele.</p>
            <ul className="content-feature-list style2 list-style">
              <li>
                <i className="ri-check-line"></i>- Analyse : présentez votre projet
                et notre équipe vous fournira une analyse détaillée pour vous
                permettre de voir dans quel mesure, votre projet est réalisable.
              </li>
              <li>
                <i className="ri-check-line"></i>- Crédit : nous proposons des
                crédits pour financer vos différents projets. La valeur du prêt
                sera fixé suivant le devis fourni par une analyse préalable de
                votre projet.
              </li>
              <li>
                <i className="ri-check-line"></i>- Publicité : nous offrons des
                options publicitaires pour aidé à médiatisé votre projet. Ces
                options vont de la simple diffusion de votre projet à la
                création professionnelle d'affiche, de prospectus et de vidéo
                publicitaires.
              </li>
            </ul>

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

export default MeTree;

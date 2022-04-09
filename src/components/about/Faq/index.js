// == Import
// Npm
import { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import ProfilCard from '../ProfilCard';
// Composants
// data, styles et utilitaires
import './styles.scss';

// == Composant
function Faq() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const handleFaqClick = (index) => {
    const newIndex = (activeFaqIndex === index) ? -1 : index;
    setActiveFaqIndex(parseInt(newIndex, 10));
  };
  return (
    <div className="about">
      <div className="faq">
        <Accordion styled>
          <Accordion.Title
            active={activeFaqIndex === 0}
            data-index={0}
            onClick={(evt) => handleFaqClick(evt.target.dataset.index)}
          >
            <Icon name="dropdown" />
            A quoi ça sert ?
          </Accordion.Title>
          <Accordion.Content active={activeFaqIndex === 0}>
            <p>
              Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeFaqIndex === 1}
            data-index={1}
            onClick={(evt) => handleFaqClick(evt.target.dataset.index)}
          >
            <Icon name="dropdown" />
            Comment faire une recherche ?
          </Accordion.Title>
          <Accordion.Content active={activeFaqIndex === 1}>
            <p>
              Sur la page recherche, complétez le champ de recherche et valider la recherche.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeFaqIndex === 2}
            data-index={2}
            onClick={(evt) => handleFaqClick(evt.target.dataset.index)}
          >
            <Icon name="dropdown" />
            Puis-je chercher n'importe quel terme ?
          </Accordion.Title>
          <Accordion.Content active={activeFaqIndex === 2}>
            <p>
              Oui, c'est fou.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
      <div className="profil_card">
        <ProfilCard />
      </div>
      <div className="about__footer">
        Projet réalisé dans le cadre d'une formation chez O'Clock
      </div>
    </div>
  );
}

// == Export
export default Faq;

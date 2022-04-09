// == Import
// Npm
// Composants
import { Message } from 'semantic-ui-react';

// data, styles et utilitaires
import './styles.scss';

function ErrorMessage() {
  return (
    <Message
      icon="times circle outline"
      header="La recherche n'a abouti à aucun résultat !"
      content="Merci de réessayer."
    />
  );
}

export default ErrorMessage;

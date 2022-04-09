// == Import
// Npm
// Composants
import { Message, Icon } from 'semantic-ui-react';

// data, styles et utilitaires
import './styles.scss';

function LoadingMessage() {
  return (
    <Message icon>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Merci de patienter</Message.Header>
        Nous chargeons les résultats de votre recherche.
      </Message.Content>
    </Message>
  );
}

export default LoadingMessage;

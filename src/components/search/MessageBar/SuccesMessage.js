// == Import
// Npm
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
// Composants

// data, styles et utilitaires
import './styles.scss';

function SuccesMessage({ resultTotal }) {
  return (
    <Message
      icon="check circle outline"
      header="La recherche a abouti avec succès !"
      content={`Voici 12 résultats sur ${resultTotal}`}
    />
  );
}
SuccesMessage.propTypes = {
  resultTotal: PropTypes.number.isRequired,
};
export default SuccesMessage;

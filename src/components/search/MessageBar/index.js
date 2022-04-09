// == Import
// Npm
import PropTypes from 'prop-types';

// Composants
import SuccesMessage from './SuccesMessage';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

// data, styles et utilitaires
import './styles.scss';

function MessageBar({ resultStatus, resultTotal }) {
  return (
    <div className="message-bar">
      {resultStatus.succes && <SuccesMessage resultTotal={resultTotal} />}
      {resultStatus.error && <ErrorMessage />}
      {resultStatus.loading && <LoadingMessage />}
    </div>
  );
}
MessageBar.propTypes = {
  resultStatus: PropTypes.object.isRequired,
  resultTotal: PropTypes.number.isRequired,
};

export default MessageBar;

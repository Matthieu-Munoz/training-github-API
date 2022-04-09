// == Import
// Npm
import PropTypes from 'prop-types';
import { Input, Form } from 'semantic-ui-react';
// Composants
// data, styles et utilitaires
import './styles.scss';

// == Composant
function SearchBar({
  value,
  setInputValue,
  handleSearchSubmit,
  handleSearchReset,
}) {
  return (
    <Form
      className="search"
      onSubmit={() => {
        handleSearchSubmit();
      }}
    >
      <Form.Field>
        <Input
          className="search__bar"
          icon="search"
          iconPosition="left"
          placeholder="Que cherchez-vous..."
          value={value}
          onChange={(evt) => setInputValue(evt.target.value)}
          onBlur={() => ((value === '') && handleSearchReset())}
        />
      </Form.Field>
    </Form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSearchReset: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;

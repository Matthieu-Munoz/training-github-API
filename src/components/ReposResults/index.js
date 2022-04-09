// == Import
// Npm
import PropTypes from 'prop-types';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
// Composants
// data, styles et utilitaires
import './styles.scss';
import MessageBar from '../MessageBar';

// == Composant
function ReposResults({ reposList, resultTotal, resultStatus, isResult, setActiveResultPage, totalPage, activeResultPage }) {
  return (
    <>
      {!isResult && (<div className="search__message">
        <Icon name="heart" />
        Effectuer un recherche pour afficher la liste de dépôts GitHub correspondant
      </div>)}
      {isResult && (
        <>
          <MessageBar resultTotal={resultTotal} resultStatus={resultStatus} />
          {!resultStatus.loading && !resultStatus.error && (
            <>
              <div className="cards">
                {
                  reposList.map((repo) => (
                    <Card className="repo-card" key={repo.id} href={repo.html_url} target="blank">
                      <Image src={repo.owner.avatar_url} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>{repo.name}</Card.Header>
                        <Card.Meta>
                          {repo.owner.login}
                        </Card.Meta>
                        <Card.Description>
                          {repo.description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra className="card__social">
                        <Icon name="star" />
                        {repo.stargazers_count}
                        <Icon name="fork" />
                        {repo.forks_count}
                      </Card.Content>
                    </Card>
                  ))
                }
              </div>
              <div className="result__nav">
                {(activeResultPage > 1) && <Button content='Précédante' inverted onClick={() => setActiveResultPage(activeResultPage - 1)} />}
                Page {activeResultPage} / {totalPage}
                {(activeResultPage < totalPage) && <Button content='Suivante' inverted onClick={() => setActiveResultPage(activeResultPage + 1)} />}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

ReposResults.propTypes = {
  reposList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
      html_url: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
  resultStatus: PropTypes.object.isRequired,
  resultTotal: PropTypes.number.isRequired,
  isResult: PropTypes.bool.isRequired,
  totalPage: PropTypes.number.isRequired,
  activeResultPage: PropTypes.number.isRequired,
  setActiveResultPage: PropTypes.func.isRequired,
};

// == Export
export default ReposResults;

// == Import
// Npm
import { useState, useEffect } from 'react';
import axios from 'axios';
// data, styles et utilitaires
import './styles.scss';

// Composants
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';

// == Composant
function RepoSearch() {
  const [reposList, setReposList] = useState([]);
  const [resultTotal, setResultTotalt] = useState(0);
  const [activeResultPage, setActiveResultPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);
  const [resultStatus, setResultStatus] = useState({ succes: false, loading: false, error: false });
  const [inputValue, setInputValue] = useState('');
  const [isResult, setIsResult] = useState(false);

  const loadRepos = () => {
    if (inputValue !== '') {
      setResultStatus({ succes: false, loading: true, error: false });
      axios
        .get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=${activeResultPage}&per_page=12`)
        .then((response) => {
          setResultStatus({ succes: false, loading: false, error: true });
          if (response.data.total_count > 0) {
            setResultStatus({ succes: true, loading: false, error: false });
            setReposList(response.data.items);
            setResultTotalt(response.data.total_count);
            setTotalPages(Math.ceil(response.data.total_count / 12));
          }
        })
        .catch(() => {
          setResultStatus({ succes: false, loading: false, error: true });
        });
    }
  };

  const handleSearchSubmit = () => {
    setIsResult(true);
    setReposList([]);
    loadRepos();
  };
  /**
   * Reset l'app au blur de l'input de recherche s'il est vide
   */
  const handleSearchReset = () => {
    setReposList([]);
    setResultTotalt(0);
    setTotalPages(0);
    setActiveResultPage(1);
    setResultStatus({ succes: false, loading: false, error: false });
    setInputValue('');
    setIsResult(false);
  };

  useEffect(() => {
    loadRepos();
  }, [activeResultPage]);

  return (
    <div className="reposearch">
      <SearchBar
        value={inputValue}
        setInputValue={setInputValue}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchReset={handleSearchReset}
      />
      <ReposResults
        reposList={reposList}
        resultTotal={resultTotal}
        resultStatus={resultStatus}
        isResult={isResult}
        activeResultPage={activeResultPage}
        totalPage={totalPage}
        setActiveResultPage={setActiveResultPage}
      />
    </div>
  );
}

// == Export
export default RepoSearch;

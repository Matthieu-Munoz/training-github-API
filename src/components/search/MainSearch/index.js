// == Import
// Npm
import { useState, useEffect } from 'react';
import axios from 'axios';
// data, styles et utilitaires
import './styles.scss';

// Composants
import SearchBar from '../SearchBar';
import ReposList from '../ReposList';

// == Composan
function MainSearch() {
  // Contient un tableau d'objet correspondant aux résultats de la recherche de l'utilisateur
  const [reposList, setReposList] = useState([]);
  // Contient un nombre correspondant au total de résultat
  const [resultTotal, setResultTotalt] = useState(0);
  // Permet d'afficher le message de succes, d'erreur ou de chargement
  const [resultStatus, setResultStatus] = useState({ succes: false, loading: false, error: false });
  // Permet la pagination des résultats
  const [activeResultPage, setActiveResultPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);
  // Valeur de l'input de recherche
  const [inputValue, setInputValue] = useState('');
  // Permet de conditionner certain affichage en fonction de la présence ou non de résultat
  const [isResult, setIsResult] = useState(false);

  /**
   * Effectue un requette à l'api GitHub avec l'input utilisateur
   * Initialise les valeurs de state correspondantes
   */
  const loadRepos = () => {
    // Lance la requette uniqument si un input est fourni
    if (inputValue !== '') {
      // Par defaut, lance le message de chargement
      setResultStatus({ succes: false, loading: true, error: false });
      axios
        .get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=${activeResultPage}&per_page=12`)
        .then((response) => {
          // Par defaut, lance le message de d'erreur
          setResultStatus({ succes: false, loading: false, error: true });
          // Si la requette renvoie au moins 1 résultat alors set du state
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
  /**
   * Gère la soumission de l'input de recherche
   */
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
    setIsResult(false);
  };
  /**
   * S'exectue à chaque changement d'activeResultPage
   * Permet donc la navigation
   */
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
      <ReposList
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
export default MainSearch;

import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Image, Button } from 'semantic-ui-react';

// == Import : local
// Composants
import logo from 'src/assets/images/icon-github.png';
import RepoSearch from 'src/components/RepoSearch';
import Faq from 'src/components/Faq';

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <BrowserRouter>
    <div className="app">
      <header className="app__header">
        <Button content="Recherche" inverted as={Link} to="/usage-api-github/" />
        <Image src={logo} size="mini" centered />
        <Button content="FAQ" inverted as={Link} to="/usage-api-github/faq" />
      </header>
      <Routes>
        <Route path="/usage-api-github/" element={<RepoSearch />} />
        <Route path="/usage-api-github/faq" element={<Faq />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);

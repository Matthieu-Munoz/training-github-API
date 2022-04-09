import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Image, Button } from 'semantic-ui-react';

// == Import : local
// Composants
import logo from 'src/assets/images/icon-github.png';
import MainSearch from 'src/components/search/MainSearch';
import Faq from 'src/components/about/Faq';

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <BrowserRouter>
    <div className="app">
      <header className="app__header">
        <Button content="Recherche" inverted as={Link} to="/" />
        <Image src={logo} size="mini" centered />
        <Button content="A propos" inverted as={Link} to="/about" />
      </header>
      <Routes>
        <Route path="" element={<MainSearch />} />
        <Route path="about" element={<Faq />} />
      </Routes>
    </div>
  </BrowserRouter>
);
// /usage-api-github/
// /usage-api-github/
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);

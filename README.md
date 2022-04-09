# Github API - O'CLock

Dans le cadre de ma formation chez O'Clock, mais surtout de la spécialisation React, j'ai eu à faire ce challenge en l'espace d'une journée.

|        Résultat attendu        |             Résultat Final             |
| :----------------------------: | :------------------------------------: |
| ![resultat](docs/resultat.png) | ![resultat](docs/Resultat%20final.png) |

Lien vers le résultat final : [ICI](https://matthieu-munoz.github.io/usage-api-github/)


**Objectif**

Je devais effectué en autonomie un annuaire qui permette de chercher des repos sur github, pour cela l'API Github était fourni.

Github fourni une API qui permet de chercher dans tous les repos, à cette adresse:

***

https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9

***

### Choix des téchnologies

Ce challenge était l'occasion d'appliquer les notions vu en formation sur React aisni que Sass.
J'ai choisis d'apprendre et donc d'utiliser la bibliothèque: [Semantic-UI](https://react.semantic-ui.com/) pour la mise en forme.
L'occasion était parfaite pour introduire aussi l'utilisation de react-router-dom !

### Détails

Mon architecture de projet a beaucoup évolué durant ce challenge, encore aujourd'hui elle méritrait quelque modification.
Depuis mon point d'entrée index.js à la source, je charge avec react-router-dom deux routes possible : / et /faq.
Etant deux parties distinctes de l'application.

Pour la partie recherche, j'ai un découpage en quatre composants :

* **RepoSearch** étant le composant principal qui chargera tout les autres
  * **SearchBar** s'occupe de la bar de recherche de repo
  * **MessageBar** affiche divers message lors de l'utilisation de la recherche, notament, un message de succes ou d'erreur mais aussi un temps de chargement pendant les requettes vers l'API
  * **ReposResult** s'occupe de l'affichage sous forme de carte des repos. Il charge 12 repos, les autres étant accessible par une navigation précédant/suivant

Pour la partie FAQ, c'est bien plus simple (pour le moment), j'ai un unique composant qui affiche un accordeons de FAQ.

### Amélioration

Je pense pouvoir être plus rigoureux dans le nomage des mes pros/state/composants, ainsi que de mieux ranger et optimiser mon code.
Notament le css qui est encore un peu en bazar.

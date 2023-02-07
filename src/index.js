// Chargement des dépendances (librairie React ici)
import React    from 'react';
import ReactDOM from 'react-dom';

// Chargement du composant React représentant l'application
import { Agenda } from './components/Agenda';

/*
 * Il est possible également de "charger" le CSS comme si c'était du JavaScript
 * Ce n'est PAS du code JavaScript valide, c'est permis par create-react-app qui est basé sur un outil qui s'appelle WebPack
 * 
 * Cet outil scanne tout le code et s'occupe ici de générer le fichier CSS final qui sera chargé dans une 
 * balise <link> traditionnelle dans le fichier HTML final renvoyé au navigateur web.
 * Il suffit de regarder avec l'inspecteur d'éléments sur la page à http://localhost:3000 pour l'observer
 * 
 */
import './index.css';


// Démarrage de React : il faut donner le composant React racine et son emplacement dans le DOM.
ReactDOM.render(
    <Agenda />,                             // Quel est le premier composant ?
    document.getElementById('react-root')   // Où démarrer React dans le DOM ?
);
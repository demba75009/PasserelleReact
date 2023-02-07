// Chargement des dépendances (librairie React ici)
import React from 'react';

// Chargement du composant React représentant une carte de données
import { Card } from './Card.jsx';


/*
 * API OpenData de la région Ile-de-France : 
 * https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
 *
 * URL finale à appeler en HTTP GET, récupère 36 résultats (paramètre rows)
 */
const url = 'https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=36';


// Composant React de type classe : le plus simple lorsqu'il y a du state
export class Agenda extends React.Component {

    state = {
        cards : []      // Liste de composants Card qui seront affichés
    };


    buildCards(records) {

        // Utilisation de la méthode map de la classe Array :
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        return records.map((record, index) => {

            // Pour chaque évènement d'agenda (un record) il faut créer un composant React représentant une carte de données.
            return <Card key={ index } 
                title={ record.fields.title_fr } 
                description={ record.fields.description } 
                imageUrl={ record.fields.image } 
                url={ record.fields.link_fr } />

            /*
             * Retourne un nouveau composant Card initialisé avec les données issues de l'API.
             *
             * La prop "key" est nécessaire pour que React puisse gérer la liste, utilisation de 
             * l'index du tableau de données comme valeur à la prop.
             * https://fr.reactjs.org/docs/lists-and-keys.html
             */
        });
    }

    componentDidMount() {

        // Exécution d'une requête HTTP GET vers l'API OpenData de la région IDF
        window.fetch(url)
            .then((httpResponse) => {

                // Désérialisation de la réponse HTTP brute en JSON.
                return httpResponse.json();     // En interne appelle JSON.parse(...)
            })
            // .then((httpResponse) => httpResponse.json()
            // version fonction fléchée directe, noter l'absence de return qui est automatique

            .then((jsonData) => { // l'argument jsonData est le résultat de httpResponse.json()

                // Mise à jour du state et donc de l'affichage.
                this.setState({ cards: this.buildCards(jsonData.records) });
            });
    }



    Search(value) {
        console.log(this.state.cards)
        let result

         result = this.state.cards.filter(e=>e.props.title.toLowerCase().includes(value)).map(r=>r)

       

        console.log(result)


        this.setState({cards:result})




    }

    render() {

        return (
            <main>

                <input onInput={(e)=> this.Search(e.target.value)} placeholders='recherchez' /> 
                <section className="card-list">
                    { this.state.cards }
                </section>


            </main>
        );
    }
}
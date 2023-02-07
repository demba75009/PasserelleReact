// Composant React de type fonction : le plus simple lorsqu'il n'y a pas de state
export function Card(props) {

    return (
        <article className="card">
            <img src={ props.imageUrl } className="card-img-top" alt={ props.description } />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.description }</p>
                <a href={ props.url } className="btn btn-primary">Voir l'évènement</a>
            </div>
        </article>
    );
}
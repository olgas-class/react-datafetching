import { Link } from "react-router-dom";

export default function Card({
  personaggio,
  isPreferito,
  addPreferito,
  removePreferito,
}) {
  const { image, name, status, species, location, episode } = personaggio;
  let color = "bg-secondary";
  if (status === "Alive") {
    color = "bg-success";
  } else if (status === "Dead") {
    color = "bg-danger";
  }

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <button
              onClick={() =>
                isPreferito(personaggio.id)
                  ? removePreferito(personaggio.id)
                  : addPreferito(personaggio.id)
              }
            >
              {isPreferito(personaggio.id) ? (
                <i className="bi bi-suit-heart-fill"></i>
              ) : (
                <i className="bi bi-suit-heart"></i>
              )}
            </button>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <span
                style={{ width: "10px", height: "10px" }}
                className={`d-inline-block p-2  border border-light rounded-circle ${color}`}
              >
                <span className="visually-hidden">Cerchio</span>
              </span>
              {status} - {species}
            </p>
            <p>Location: {location.name}</p>
            <p>primo episodio: {episode[0]}</p>
            <p>Ultimo episodio: {episode[episode.length - 1]}</p>
            <Link to={`/personaggi/${personaggio.id}`}>Vedi dettaglis</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

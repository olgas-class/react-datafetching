export default function Card({ personaggio }) {
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
          </div>
        </div>
      </div>
    </div>
  );
}

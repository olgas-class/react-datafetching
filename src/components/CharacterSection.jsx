export default function CharacterSection({
  character,
  isPreferito,
  addPreferito,
  removePreferito,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <img
            className="img-fluid"
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className="col-12 col-md-7">
          <h1>{character.name}</h1>
          <div>
            <button
              onClick={() =>
                isPreferito(character.id)
                  ? removePreferito(character.id)
                  : addPreferito(character.id)
              }
            >
              {isPreferito(character.id) ? (
                <i className="bi bi-suit-heart-fill"></i>
              ) : (
                <i className="bi bi-suit-heart"></i>
              )}
            </button>
          </div>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gendre: {character.gender}</p>
          <div>Numero di episodi: {character.episode.length}</div>
        </div>
      </div>
    </div>
  );
}

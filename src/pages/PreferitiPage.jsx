import Card from "../components/Card";

export default function PreferitiPage({
  personaggi,
  preferiti,
  isPreferito,
  addPreferito,
  removePreferito,
}) {
  console.log(personaggi, preferiti);

  const personaggiPreferiti = personaggi.filter((pers) =>
    preferiti.includes(pers.id)
  );

  return (
    <div className="container">
      <h1>Personaggi preferiti</h1>
      <div className="row row-cols-2 g-3">
        {personaggiPreferiti.map((personaggio) => (
          <div className="col" key={personaggio.id}>
            <Card
              personaggio={personaggio}
              isPreferito={isPreferito}
              addPreferito={addPreferito}
              removePreferito={removePreferito}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

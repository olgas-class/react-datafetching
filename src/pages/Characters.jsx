import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Characters() {
  const [personaggi, setPersonaggi] = useState([]);
  const [totale, setTotale] = useState(null);
  const [totalePagine, setTotalePagine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPersonaggi();
  }, [page]);

  function fetchPersonaggi() {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((resp) => {
        setPersonaggi(resp.data.results);
        setTotale(resp.data.info.count);
        setTotalePagine(resp.data.info.pages);
        setLoading(false);
      });
  }
  return (
    <>
      <div className="container py-5">
        <h1>Tutti i personaggi</h1>
        {totale !== null && (
          <div className="my-4">
            Visualizzati: da {(page - 1) * personaggi.length + 1} a{" "}
            {page * personaggi.length} /{totale}
          </div>
        )}

        {loading === true ? (
          <div>Loading...</div>
        ) : (
          <section>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {personaggi.map((personaggio) => (
                <div className="col" key={personaggio.id}>
                  <Card personaggio={personaggio} />
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <span className="me-2">
                Pagina {page} / {totalePagine}
              </span>

              <button
                disabled={page === 1}
                className="btn btn-success me-2"
                onClick={() => setPage((current) => current - 1)}
              >
                precedente
              </button>
              <button
                disabled={page === totalePagine}
                onClick={() => setPage((current) => current + 1)}
                className="btn btn-success"
              >
                successiva
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

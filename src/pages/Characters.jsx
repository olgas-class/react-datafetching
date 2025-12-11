import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Characters({
  personaggi,
  isPreferito,
  addPreferito,
  removePreferito,
}) {
  return (
    <>
      <div className="container py-5">
        <h1>Tutti i personaggi</h1>

        <section>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {personaggi.map((personaggio) => (
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
        </section>
      </div>
    </>
  );
}

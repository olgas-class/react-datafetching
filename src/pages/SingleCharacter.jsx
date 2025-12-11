import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterSection from "../components/CharacterSection";
import BackButton from "../components/BackButton";

export default function SingleCharacter({
  isPreferito,
  addPreferito,
  removePreferito,
}) {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => {
        setCharacter(resp.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Personaggio non esiste");
        navigate("/personaggi");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <section>
      <BackButton />
      {loading === true && "Loading..."}
      {character !== null && (
        <CharacterSection
          isPreferito={isPreferito}
          addPreferito={addPreferito}
          removePreferito={removePreferito}
          character={character}
        />
      )}
    </section>
  );
}

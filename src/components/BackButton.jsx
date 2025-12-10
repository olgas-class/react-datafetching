import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  function goBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <a className="btn btn-success" onClick={goBack} href="">
      Ritorna
    </a>
  );
}

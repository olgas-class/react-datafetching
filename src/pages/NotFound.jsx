import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function NotFound() {
  return (
    <section>
      <h1>404 Not found!</h1>
      <Link className="btn btn-primary" to="/">
        Pagna Home
      </Link>
      <BackButton />
    </section>
  );
}

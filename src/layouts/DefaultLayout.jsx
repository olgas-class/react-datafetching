import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Outlet />

      <footer>SONO FOOTER</footer>
    </>
  );
}

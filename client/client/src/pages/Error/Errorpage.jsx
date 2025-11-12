import { NavLink } from "react-router-dom";

export default function Errorpage() {
  return (
    <div>
      <h1>Nous avons rencontré un problème</h1>
      <h2>Erreur 404...</h2>
      <NavLink to={"/"}>Retour</NavLink>
    </div>
  );
}

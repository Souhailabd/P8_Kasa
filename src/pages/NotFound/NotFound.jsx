import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notFound__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;

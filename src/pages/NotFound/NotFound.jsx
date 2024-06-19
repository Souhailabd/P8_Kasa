import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1 className="notFound-title">404</h1>
      <p className="notFound-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notFound-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;

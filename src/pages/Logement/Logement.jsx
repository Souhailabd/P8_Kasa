import { useParams, Navigate } from "react-router-dom";
import { logements } from "../../utils/Logements";
import { PageTitle } from "../../utils/PageTitle";
import Rating from "../../components/Rating/Rating";
import Slide from "../../components/Slide/Slide";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
  // Récupérer l'ID de la chambre depuis les paramètres de l'URL
  const { logementId } = useParams();

  // Trouver la chambre correspondante dans la liste des chambres
  const logement = logements.find((logement) => logement.id === logementId);
  // Si la chambre n'est pas trouvée, rediriger vers la page NotFound
  if (!logement) {
    return <Navigate to="/notfound" />;
  }
  // Mettre à jour le titre de la page avec le titre de la chambre
  PageTitle(`Kasa | ${logement.title}`);

  return (
    <div className="logement">
      {/* Slider pour afficher les images de la chambre */}
      <div className="slide-container">
        <Slide pictures={logement.pictures} />
      </div>
      {/* Détails de la chambre */}
      <div className="details">
        {/* Titre et emplacement de la chambre */}
        <div className="details-location details-item">
          <h2 className="details-title">{logement.title}</h2>
          <h1 className="details-location">{logement.location}</h1>
        </div>
        {/* Informations sur le propriétaire de la chambre */}
        <div className="details-host details-item">
          <p className="details-host-name">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt=""
            className="details-host--picture"
          />
        </div>
        {/* Tags associés à la chambre */}
        <ul className="details-tags details-item">
          {logement.tags.map((tag, index) => (
            <li key={index} className="details-tags--item">
              {tag}
            </li>
          ))}
        </ul>
        {/* Évaluation de la chambre */}
        <div className="details-rating details-item">
          <Rating rating={parseInt(logement.rating)} />
        </div>
        {/* Description de la chambre */}
        <div className="details-description details-item">
          <Collapse
            title="Description"
            content={<p>{logement.description}</p>}
          />
        </div>
        {/* Équipements de la chambre */}
        <div className="details-equipments details-item">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;

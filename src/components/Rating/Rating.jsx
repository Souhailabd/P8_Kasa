import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
  // Icone pour une étoile vide
  const emptyIcon = (
    <FontAwesomeIcon icon={faStar} className="star star-empty empty-star" />
  );
  // Icone pour une étoile pleine
  const fullIcon = (
    <FontAwesomeIcon icon={faStar} className="star star-full full-star" />
  );

  const renderStars = () => {
    // Générer les étoiles pleines en fonction du rating
    const filledStar = Array.from({ length: rating }, (_, index) => (
      <span key={index}>{fullIcon}</span> // étoile pleine
    ));
    // Générer les étoiles vides pour compléter jusqu'à 5 étoiles(le max)
    const emptyStar = Array.from({ length: 5 - rating }, (_, index) => (
      <span key={index + rating}>{emptyIcon}</span> // étoile vide
    ));
    // Fusionner les étoiles pleines et vides pour créer la représentation complète
    return [...filledStar, ...emptyStar];
  };

  // Rendu du composant avec les étoiles générées
  return <div>{renderStars()}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;

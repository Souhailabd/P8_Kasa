import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArrowLeft from "../../assets/arrow_left.png";
import ArrowRight from "../../assets/arrow_right.png";

function Slide({ pictures }) {
    // State pour suivre l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0)

    // Effctt pour réinitialiser l'index lorsque la liste des images change
    useEffect(() => {
        setCurrentIndex(0)
    }, [pictures])

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    };

    // Fonction pour passer à la diapositive précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)
    };

    // Nombre total d'images
    const totalPictures = pictures.length

    return (
        <div className="slide">
            {/* Image actuelle */}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />

            {/* Affichage des chevron de navigation seulement s'il y a plus d'une seule image */}
            {totalPictures > 1 && (
                <div>
                    {/* Bouton pour la diapositive précédente */}
                    <div onClick={prevSlide} className="slide-button">
                        <img src={ArrowLeft} className="arrow arrow-left" />
                    </div>

                    {/* Bouton pour la diapositive suivante */}
                    <div onClick={nextSlide} className="slide-button">
                        <img src={ArrowRight} className="arrow arrow-right" />
                    </div>
                </div>
            )}

            {/* Affichage du compteur seulement s'il y a plus d'une seule image */}
            <div className="slide-counter">
                {totalPictures > 1 && `${currentIndex + 1}/${totalPictures}`}
            </div>
        </div>
    );
}

Slide.propTypes = {
    pictures: PropTypes.array
} 

export default Slide;

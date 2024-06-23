import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Collapse = ({ title, content }) => {
    // Logique de votre composant
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container" onClick={toggleCollapse}>
      <div className="collapse-title" >
        <p>{title}</p>
        <FontAwesomeIcon icon={faChevronUp} className={`collapse-icon ${isOpen ? 'collapse-icon--down' : 'collapse-icon--up'}`} />
      </div>
      <div className={`collapse-content ${isOpen ? 'collapse-content--open' : ''}`}>
      {content}
    </div>
    </div>
  );
};

Collapse.propTypes = {
  content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
  title: PropTypes.string
}

export default Collapse;

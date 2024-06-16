import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


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
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="collapse-icon" />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;

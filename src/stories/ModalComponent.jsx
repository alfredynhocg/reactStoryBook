import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalComponent.css';

const ModalComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='s-button' onClick={toggleModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>X</button>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-content">{content}</p>
            <button className="close-button" onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

ModalComponent.defaultProps = {
  title: 'Diplomado USIP - Modulo de React',
  content: 'ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.  Es importante señalar que ReactJS no es un framework de JavaScript. Esto porque sólo es responsable de renderizar los componentes de la capa de vista de una aplicación. React es una alternativa a frameworks como Angular y Vue, que permiten crear funciones complejas.',
};

export default ModalComponent;

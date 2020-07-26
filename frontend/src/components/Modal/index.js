import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Modal = ({ 
  show, 
  children 
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;

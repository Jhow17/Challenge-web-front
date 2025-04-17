import React from 'react';
import FormularioPopup from './FormularioPopup';

const Button = () => {

  return (
    <>
      <button type="button" className="butao btn btn-primary d-inline-flex align-items-center rounded btn-md"  data-bs-toggle="modal"
      data-bs-target="#formModal">
      <i className="bi bi-plus fs-5 text-white"></i>
      <span>Add Notificação</span>
    </button>
    <FormularioPopup/>

    </>

  );
};

export default Button;
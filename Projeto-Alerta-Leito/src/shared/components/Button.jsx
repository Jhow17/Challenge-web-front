import React from 'react';

import { Link } from "react-router-dom";

const Button = () => {

  return (
    <>
        <Link to="/notificacoes" className="nav-link text-black">
          <button type="button" className="butao btn btn-primary d-inline-flex align-items-center rounded btn-md"  data-bs-toggle="modal"
            data-bs-target="#formModal">
            <i className="bi bi-plus fs-5 text-white"></i>
            <span>Add Notificação</span>
          </button>
        </Link>

    

    </>

  );
};

export default Button;
import React from 'react';

const Header = () => {
  return (
    //  w-100 para ocupar toda a largura da tela
    // top-0 para ficar no
    // position-fixed para ficar fixo no topo
    <header className="header container bg-success text-white p-3 d-flex justify-content-end ">
      <div className=" bg-white rounded-pill px-3 d-flex align-items-center justify-content-center gap-2">
        <i class="bi bi-list text-black-50 fs-4"></i>
        <i className="bi bi-person-circle text-black-50  fs-4"></i>
      </div>
    </header>
  );
}

export default Header;

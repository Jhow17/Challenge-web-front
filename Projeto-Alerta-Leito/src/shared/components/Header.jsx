import React from 'react';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header bg-success text-white py-3 d-flex justify-content-between align-items-center px-3">
      <button className="btn btn-light d-md-none" onClick={onToggleSidebar}>
        <i className="bi bi-list"></i>
      </button>

      <div className="bg-white rounded-pill px-3 py-2 d-flex align-items-center gap-2">
        <i className="bi bi-person-circle text-black-50 fs-4"></i>
      </div>
    </header>
  );
};
export default Header;

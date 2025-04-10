import React from 'react'

const Button = () => {
  return (
    <div >
      <span className="d-inline-flex align-items-center gap-1 bg-primary p-1 rounded">
        <i className="bi bi-plus fs-4 text-white"></i>
        <button type="button" className="btn btn-primary notion-button">Add Notificação</button>
      </span>
    </div>
  )
}

export default Button
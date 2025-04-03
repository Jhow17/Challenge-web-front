import React from 'react'

const Button = ({Label}) => {
  return (
    <div >
      <span className="d-inline-flex align-items-center gap-2 bg-primary p-2 rounded">
        <i className="bi bi-plus fs-4 text-white"></i>
        <button type="button" className="btn btn-primary">{Label}</button>
      </span>

    </div>
  )
}

export default Button
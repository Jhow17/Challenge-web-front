import React from 'react'

const CardLeitos = ({ titulo, valor, bg }) => {
  return (
    <div className={`card text-white text-center mb-3 ${bg}`} style={{ minWidth: "14rem" }}>
    <div className="card-header fs-6">{titulo}</div>
    <div className="card-body">
      <h5 className="card-title fs-5">{valor}</h5>
    </div>
  </div>
  )
}

export default CardLeitos
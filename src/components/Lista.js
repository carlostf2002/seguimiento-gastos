import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Lista({ gastos, eliminarGasto }) {
  const [busqueda, setBusqueda] = useState('');

  const resultados = gastos.filter((gasto) =>
    gasto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
    gasto.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleEliminar = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este gasto?');
    if (confirmacion) {
      eliminarGasto(id);
    }
  };

  return (
    <div>
      <h2>Lista de Gastos</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar por descripción o categoría"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="row">
        {resultados.map((gasto) => (
          <div key={gasto.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{gasto.descripcion}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{gasto.categoria}</h6>
                <p className="card-text">Monto: ${gasto.monto.toFixed(2)}</p>
                <p className="card-text">Fecha: {gasto.fecha}</p>
                <button className="btn btn-danger" onClick={() => handleEliminar(gasto.id)}>
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
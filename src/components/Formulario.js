import React, { useState } from 'react';

function Formulario({ agregarGasto }) {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion || !categoria || !monto || !fecha) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    const nuevoGasto = {
      id: Date.now(),
      descripcion,
      categoria,
      monto: parseFloat(monto),
      fecha
    };
    agregarGasto(nuevoGasto);
    setDescripcion('');
    setCategoria('');
    setMonto('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label>Descripción</label>
        <input
          type="text"
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Categoría</label>
        <input
          type="text"
          className="form-control"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Monto</label>
        <input
          type="number"
          className="form-control"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label>Fecha</label>
        <input
          type="date"
          className="form-control"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Agregar Gasto</button>
      </div>
    </form>
  );
}

export default Formulario;
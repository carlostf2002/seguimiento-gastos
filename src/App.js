import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [gastos, setGastos] = useState([]);
  const [gastoEditado, setGastoEditado] = useState(null);

  useEffect(() => {
    document.title = "Mi Gestor de Gastos";
  }, [])

  useEffect(() => {
    const datosGuardados = localStorage.getItem('gastos');
    if (datosGuardados) {
      setGastos(JSON.parse(datosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const agregarGasto = (gasto) => {
    if (gastoEditado) {
      setGastos(gastos.map((g) => (g.id === gasto.id ? gasto : g)));
      setGastoEditado(null);
    } else {
      setGastos([...gastos, gasto]);
    }
  };

  const eliminarGasto = (id) => {
    setGastos(gastos.filter((gasto) => gasto.id !== id));
  };

  const editarGasto = (gasto) => {
    setGastoEditado(gasto);
  };

  return (
    <div>
      <Header />
      <div className="container my-4">
        <Formulario agregarGasto={agregarGasto} gastoEditado={gastoEditado} />
        <Lista gastos={gastos} eliminarGasto={eliminarGasto} editarGasto={editarGasto} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react'
import '../App.css';
import {useState, useEffect} from 'react';

const Ejercicio2 = () => {
  const [Libras, setLibras] = useState(0);
  const [Onzas, setOnzas] = useState(0);
  const [Gramos, setGramos] = useState(0);


  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLibras((total * tipo) / 1);
    setOnzas((total * 16));
    setGramos((total * 454));
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };
  return (
    <div className="App">
      <h1 className='title1'>Conversor de masa</h1>

      <p>Libras: {Libras}</p>
      <p>Onzas: {Onzas}</p>
      <p>Gramos: {Gramos}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Libras</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  )
}

export default Ejercicio2
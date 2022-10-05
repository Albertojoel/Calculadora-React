  import './App.css';
  import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
  import Boton from './componentes/boton';
  import Pantalla from './componentes/pantalla';
  import BotonClear from './componentes/botonClear';
  import { useState } from 'react';
  import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('')

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () =>{

    if (input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingresa valores para realizar los calculos")
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarclick ={agregarInput} >1</Boton>
          <Boton manejarclick ={agregarInput}>2</Boton>
          <Boton manejarclick ={agregarInput}>3</Boton>
          <Boton manejarclick ={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick ={agregarInput}>4</Boton>
          <Boton manejarclick ={agregarInput}>5</Boton>
          <Boton manejarclick ={agregarInput}>6</Boton>
          <Boton manejarclick ={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick ={agregarInput}>7</Boton>
          <Boton manejarclick ={agregarInput}>8</Boton>
          <Boton manejarclick ={agregarInput}>9</Boton>
          <Boton manejarclick ={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick ={calcularResultado }>=</Boton>
          <Boton manejarclick ={agregarInput}>0</Boton>
          <Boton manejarclick ={agregarInput}>.</Boton>
          <Boton manejarclick ={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClear={()=> setInput('')}>Clear</BotonClear>
        </div>
        
      </div>
    </div>
  );
}
export default App;

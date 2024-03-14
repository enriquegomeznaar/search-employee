//react
import { useState } from 'react';
//css
import './App.css';
//mocking
import employesMock from "./db/emp.json";

//componente para empleados
const EmployeComponent = (props) => {

  return(
    <>
    <h1>{props.name}</h1>
    <p>{props.born}</p>
    <p>{props.dni}</p>
    <p>{props.file}</p>
    <p>{props.gender}</p>
    </>
  );

}

const App = () => {

  const [valueState, setValueState] = useState("");
  const [employeState, setEmployeState] = useState(false); 
  //por defecto, employe va a ser igual a false

  const captureValue = (event) => {

    //prevenimos el comportamiento por defecto del evento onChange
    event.preventDefault();

    //buscamos el empleado
    const employe = employesMock.find(element => element.dni === valueState );
    
    //si el empleado existe establecemos que el estado employe va a ser igual al empleado encontrado
    if( employe ){ 
      setEmployeState(employe) 
    }else{ 
      setEmployeState(false) 
    }

  };

  const handleInput = (event) => {

    //la propiedad target del evento contiene las propiedades del input (en este caso el value)

    setValueState(event.target.value) 
    //establecemos que el estado value, va a ser igual a lo que contenga el input

  }

  return (
    <div className="App">
      
        <h1>Gestor de Empleados</h1>

        <label>Buscar Personaje</label> 
        <input id="searchUser" type="text" value={valueState} onChange={handleInput} placeholder="Nombre del Personaje"/>
        <button className='btn-submit' onClick={captureValue}>Buscar</button>

        <div id="empContainer">
        {
        employeState //si employeState existe (es true)

        ? <EmployeComponent 
          name={employeState.name}
          born={employeState.born}
          dni={employeState.dni}
          file={employeState.file}
           /> //va a renderizar el componente

        : <p>Sin usuarios</p> //caso contrario renderiza un mensaje que diga usuario no encontrado
        }
        </div>
    </div>
  );
}

export default App;

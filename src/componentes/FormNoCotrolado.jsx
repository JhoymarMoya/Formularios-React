import React from 'react'
import { useRef } from 'react';

const FormNoCotrolado = () => {

    const formulario = useRef(null)//los useRef siempre recive un null
    
    const handleSubmit = e => {
        e.preventDefault();

        const datos  = new FormData(formulario.current);
        //console.log( ...datos.entries())//entris devuelve la llave (name) y el valor

        const objetoDatos = Object.fromEntries([...datos.entries()]);//trea las llave y valor a un objeto
        console.log(objetoDatos);
        

        //Desctruturacion podemos hacerlo 
        const {todoName, todoDescripcion} = objetoDatos;
        //validamos si esta vacio
        
        if(!todoName.trim()){
            console.log('Por favor ingrese un nombre ');
          return  
        } 
        if(!todoDescripcion.trim()  ){
            console.log('Por favor llenar la descripción ');
          return  
        } 
        console.log('validaciones aprobadas ');
    }
    
    
  return (
    <>
        <h2>No controlados</h2> 
        <form action="" ref={formulario} onSubmit={handleSubmit}>
            <label htmlFor="">Ingrese Todo</label>
           <input
             type="text"
             placeholder='Ingrese
             Todo'
             name='todoName'
             defaultValue={"juan"}
             className='form-control
             mb-2' />
            <label >Ingrese Descripción</label>
            <textarea name="todoDescripcion" className="form-control mb-2" placeholder='Ingrese Descripción del todo'/>
        
            <label htmlFor="">Seleccione Estado</label>
            <select name="todoEstado"
                className='form-control mb-2'>

                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type='submit' className='btn btn-primary'>Agregar</button>
        </form>
    </>
  );
};

export default FormNoCotrolado
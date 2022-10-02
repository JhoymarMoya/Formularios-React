import React, { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendientes",
    todoCheck: false,
    /* todoCheck2: false, */
  });

  const [error, setError] = useState(false)


  const handleSubmit =(e) => {
    e.preventDefault();

    //aqui se hacemos las validaciones 
    const { todoName, todoDescripcion } = todo;

    if (!todoName.trim() || !todoDescripcion.trim()) {
      setError(true);

      return;
    }
    setError(false );
    console.log(todo);
  }

  const handleChamge = (e) => {
    //otro modo con destructure
    const {name, value, checked, type} = e.target

    setTodo({
        ...todo,
        [name]: type=== "checkbox" ? checked : value
    });

    //otro modo
    /* setTodo({
      ...todo,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      //propiedad dinamica  ponemos corchetes para que detecte los caracteres especiales
      //valida si es tipo checkbox y si toma true o false
    }); */

    //otro modo
    /*  setTodo (old => ({//Otro modo con funcion de flecha extrae el ultimo elemento que se modifico
            ...todo,
            [e.target.name]: e.target.value,
        })); */
  };
  //los componentes siempre con la letra inicial en Mayuscula

  const PintarError = () => (
    <div className="alert alert-danger">
      Campos obligatorios
    </div>
  )
    
  

  return (
    <>
      <h2>Formulario Controlado</h2>
      {/* pintamos el erro si no ponemos null */}
      {
        error ? <PintarError/> : null
      }
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Ingrese Todo</label>
        <input
          type="text"
          placeholder="Ingrese
             Todo"
          name="todoName"
          className="form-control
             mb-2"
          onChange={handleChamge}
          value={todo.todoName}
        />
        <label>Ingrese Descripción</label>
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese Descripción del todo"
          onChange={handleChamge}
          value={todo.todoDescripcion}
        />

        <label htmlFor="">Seleccione Estado</label>
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChamge}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check">
          
          <input
            type="checkbox"
            className="form-check-input" 
            checked={todo.todoCheck}
            name="todoCheck"
            onChange={handleChamge}
            />
          <label
            className="form-check-label" htmlFor="flexCheckDefault">Dar
            prioridad</label>
        </div>
      {/*   <div className="form-check">
          
          <input
            type="checkbox"
            className="form-check-input" 
            checked={todo.todoCheck2}
            name="todoCheck2"
            onChange={handleChamge}
            />
          <label
            className="form-check-label" htmlFor="flexCheckDefault">No Dar
            prioridad</label>
        </div> */}
        

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;

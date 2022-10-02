/* Formulario no controlado

    uncontrolled

    (opens new window): En la mayoría de los casos, te recomendamos usar Componentes controlados para implementar formularios.
    En un componente controlado, los datos del formulario son manejados por un componente React.
    La alternativa son los componentes no controlados, donde los datos del formulario son manejados por el propio DOM.
    Para escribir un componente no controlado, puedes usar una referencia para que obtengas los valores del formulario desde el DOM.

Referencias y el DOM

    refs

(opens new window): Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.
useRef
(opens new window): useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente. ::: */

//  const formulario = useRef(null)//los useRef siempre recive un null
//console.log( ...datos.entries())//entris devuelve la llave y el valor

//const objetoDatos = Object.fromEntries([...datos.entries()]);//trea las llave y valor a un objeto, donde cada llave  es una propiedad y el valor es su valor correspondiente

/* Formularios controlados

    controlled

    Los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario.
    Ahora vamos a poder detectar los campos input en tiempo real.

Ejemplo casi casi: */
//onChange={e => setTodo({...todo, todoName: e.target.value})} //recibe una funcion que recibe el e y detecta el cambio cuano teclamos cualquier letra
//...todo hace una copia  de todos los datos y luego toma lo que se actualiza

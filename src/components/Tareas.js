import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {obtenerTareasAction} from '../redux/tareasDucks'

export const Tareas = () => {

    const API='http://localhost:8080'

    const dispatch = useDispatch();

    const deleteTarea = async (id) => {
        const userResponse = window.confirm("Seguro que desea borrar la tarea");
        if (userResponse) {
          const res = await fetch(`${API}/tarea/${id}`, {
            method: "DELETE",
          });
        }
      };

    const tareas = useSelector(store => store.tareas.array )

    return(

    <div>
        <h1>Lista de Tareas</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Descripcion</th>
              <th>fecha</th>
              <th>Vigente</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.descripcion}</td>
                <td>{tarea.fechaCracion}</td>
                <td>{tarea.vigente}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteTarea(tarea.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        <button onClick={() => dispatch(obtenerTareasAction())}>Lista de Tareas</button>
        
    </div>
    
        
    )
}
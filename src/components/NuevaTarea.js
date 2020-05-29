import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {crearTareasAction} from '../redux/tareasDucks'

export default  () => {

    const [nuevaDescripcion, setNuevaDescripcion] = useState("");

    const handleNuevaTarea = event =>{
        setNuevaDescripcion(event.target.value)
    };

    const handleCreateTarea = event => {
        console.log(10)
    }

    const dispatch = useDispatch();

    

    return(

    <div className="row">
      <div className="col-md-4">
        <form className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={handleNuevaTarea}
              value={nuevaDescripcion}
              className="form-control"
              placeholder="Name"
              autoFocus
            />
          </div>
          <button className="btn btn-primary btn-block"
            onClick={() => dispatch(crearTareasAction())}
            
          >
            Crear
          </button>
        </form>
      </div>
      </div>

    )
}
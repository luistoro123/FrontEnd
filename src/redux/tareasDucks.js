import axios from 'axios';


//constantes
const dataInicial = {
    array : [],
    id: 0
}

//type
const OBTENER_TAREAS_EXITO = 'OBTENER_TAREAS_EXITO';
const CREAR_TAREAS_EXITO = 'CREAR_TAREAS_EXITO';

//reducer

export default function tareasReducer (state = dataInicial, action) {
    switch(action.type){
        case OBTENER_TAREAS_EXITO:
            return{...state,array: action.payload}
        case CREAR_TAREAS_EXITO:
            return{...state,array: action.payload}      
        default:
            return state
    }

}

//action

export const obtenerTareasAction = () => async(dispatch,getState) =>{
    try {
        const resp = await axios.get('http://localhost:8080/tarea')
        dispatch({
            type: OBTENER_TAREAS_EXITO,
            payload:resp.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const crearTareasAction = () => async(dispatch,getState) =>{
    try {
        console.log(getState);
        const resp = await axios.get('http://localhost:8080/tarea')
        dispatch({
            type: CREAR_TAREAS_EXITO,
            payload:resp.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const eliminaTareasAction = () => async(dispatch,getState) =>{
    try {
        const resp = await axios.get('http://localhost:8080/tarea')
        dispatch({
            type: CREAR_TAREAS_EXITO,
            payload:resp.data
        })
    } catch (error) {
        console.log(error)
    }

}
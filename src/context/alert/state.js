import React, { useReducer } from 'react'
import AlertContext from './context'
import alertReducer from './reducers'
import {
    SET_ALERT,
    REMOVE_ALERT
} from './actions'


const AlertState = (props) => {
    const initialState = []
    const [state, dispatch] = useReducer(alertReducer, initialState)

    //setAlert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = Math.random();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })

        //removeAlert
        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
            payload: id
        }), timeout)

    }
    return (
        <AlertContext.Provider value={{
            setAlert,
            alerts: state

        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState

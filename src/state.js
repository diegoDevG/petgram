//minimalistic state management
import React, { createContext, useContext, useReducer } from "react"

export const StateContext  = createContext(null)

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    { children }
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)


//state data
export const initialState = {
  user: { isAuth: false }
}

export const reducer = (state, action) => {
  switch (action.type){
    case 'changeAuth':
      return {
        ...state,
        user: action.newIsAuth
      }
      
      default: 
        return state
  }
}

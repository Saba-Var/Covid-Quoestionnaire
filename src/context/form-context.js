import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'identification': {
      state.identification = action.newState;
      return state;
    }
    default:
      return state;
  }
};

const initialState = {
  identification: { firstName: '', lastName: '', email: '' },
};

const FormContext = React.createContext();

export const FormContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ dispatch, state }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;

import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'identification': {
      state.identification = action.newState;
      return state;
    }
    case 'covid': {
      state.covid = action.newState;
      return state;
    }
    case 'vaccinated': {
      state.vaccinated = action.newState;
      return state;
    }
    case 'covidPolicy': {
      state.covidPolicy = action.newState;
      return state;
    }
    default:
      return state;
  }
};

const initialState = {
  identification: { first_name: '', last_name: '', email: '' },
  covid: {
    HadCovid: '',
    antibodies: {
      test_date: '',
      number: '',
    },
    had_antibody_test: '',
    covid_sickness_date: '',
  },
  vaccinated: { had_vaccine: '', vaccination_stage: '', i_am_waiting: '' },
  covidPolicy: {
    non_formal_meetings: '',
    number_of_days_from_office: '',
    what_about_meetings_in_live: '',
    tell_us_your_opinion_about_us: '',
  },
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

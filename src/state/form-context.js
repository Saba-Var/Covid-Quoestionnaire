import React, { useReducer } from 'react';

const inputs = {
  first_name: '',
  last_name: '',
  email: '',
  had_covid: '',
  antibodies: {
    test_date: '',
    number: '',
  },
  had_antibody_test: '',
  covid_sickness_date: '',
  had_vaccine: '',
  vaccination_stage: '',
  i_am_waiting: '',
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
};
let initialState = JSON.parse(JSON.stringify(inputs));
const reducer = (state, action) => {
  const formData = action.newState;
  switch (action.type) {
    case 'identification': {
      state.first_name = formData.first_name;
      state.last_name = formData.last_name;
      state.email = formData.email;
      return state;
    }
    case 'covid': {
      state.had_covid = formData.had_covid;
      state.antibodies = formData.antibodies;
      state.had_antibody_test = formData.had_antibody_test;
      state.covid_sickness_date = formData.covid_sickness_date;
      return state;
    }
    case 'vaccinated': {
      state.had_vaccine = formData.had_vaccine;
      state.vaccination_stage = formData.vaccination_stage;
      state.i_am_waiting = formData.i_am_waiting;
      return state;
    }
    case 'covidPolicy': {
      state.non_formal_meetings = formData.non_formal_meetings;
      state.number_of_days_from_office = formData.number_of_days_from_office;
      state.what_about_meetings_in_live = formData.what_about_meetings_in_live;
      state.tell_us_your_opinion_about_us =
        formData.tell_us_your_opinion_about_us;
      return state;
    }
    case 'reset': {
      return (state = JSON.parse(JSON.stringify(inputs)));
    }
    default:
      return state;
  }
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

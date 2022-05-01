import { ErrorMessage, RadioButton, RadioInputContainer } from 'components';
import FormContext from 'state/form-context';
import { useContext } from 'react';
import {
  NotPlanning,
  PlanningVaccination,
} from 'pages/Vaccinated/components/suggestions';
function Waiting(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const inputData = {
    target: 'i_am_waiting',
    register: props.hookForm.register,
    checked: ctx.state.i_am_waiting,
  };
  return (
    <>
      <RadioInputContainer question='რას ელოდები?*'>
        <RadioButton
          value={'დარეგისტრირებული ვარ და ველოდები რიცხვს'}
          inputData={inputData}
          ctxValue={'registered_and_waiting'}
        />
        <RadioButton
          value={'არ ვგეგმავ'}
          inputData={inputData}
          ctxValue={'not_planning'}
        />
        <RadioButton
          value={'გადატანილი მაქვს და ვგეგმავ აცრას'}
          inputData={inputData}
          ctxValue={'had_covid_and_planning_to_be_vaccinated'}
        />
        {props.hookForm.errors.i_am_waiting && (
          <ErrorMessage text={errorMessage} />
        )}
      </RadioInputContainer>
      {props.formState.i_am_waiting === 'not_planning' && <NotPlanning />}
      {props.formState.i_am_waiting ===
        'had_covid_and_planning_to_be_vaccinated' && <PlanningVaccination />}
    </>
  );
}

export default Waiting;

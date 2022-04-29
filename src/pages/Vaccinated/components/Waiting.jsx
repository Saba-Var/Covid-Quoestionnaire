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
  const option1 = 'დარეგისტრირებული ვარ და ველოდები რიცხვს';
  const option2 = 'არ ვგეგმავ';
  const option3 = 'გადატანილი მაქვს და ვგეგმავ აცრას';
  const inputData = {
    target: 'waiting',
    register: props.hookForm.register,
    checked: ctx.state.vaccinated.waiting,
  };
  return (
    <>
      <RadioInputContainer question='რას ელოდები?*'>
        <RadioButton value={option1} inputData={inputData} />
        <RadioButton value={option2} inputData={inputData} />
        <RadioButton value={option3} inputData={inputData} />
        {props.hookForm.errors.waiting && <ErrorMessage text={errorMessage} />}
      </RadioInputContainer>
      {props.formState.waiting === option2 && <NotPlanning />}
      {props.formState.waiting === option3 && <PlanningVaccination />}
    </>
  );
}

export default Waiting;

import PlanningVaccination from 'Components/VaccinatedInputs/Suggestions/PlanningVaccination';
import NotPlanning from 'Components/VaccinatedInputs/Suggestions/NotPlanning';
import RadioInputContainer from 'Components/RadioInputContainer';
import ErrorMessage from 'Components/ErrorMessage';
import RadioButton from 'Components/RadioButton';
import FormContext from 'context/form-context';
import { useContext } from 'react';

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

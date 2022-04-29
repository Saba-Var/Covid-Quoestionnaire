import { RadioInputContainer, ErrorMessage, RadioButton } from 'components';
import { NotRegistered } from 'pages/Vaccinated/components/suggestions';
import FormContext from 'state/form-context';
import { useContext } from 'react';

function WhichStage(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option1 = 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე';
  const option2 = 'სრულად აცრილი ვარ';
  const option3 = 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე';
  const inputData = {
    checked: ctx.state.vaccinated.stage,
    register: props.hookForm.register,
    target: 'stage',
  };
  return (
    <>
      <RadioInputContainer question='აირჩიე რა ეტაპზე ხარ?*'>
        <RadioButton value={option1} inputData={inputData} />
        <RadioButton value={option2} inputData={inputData} />
        <RadioButton value={option3} inputData={inputData} />
        {props.hookForm.errors.stage && <ErrorMessage text={errorMessage} />}
      </RadioInputContainer>
      {props.formState.stage === option3 && <NotRegistered />}
    </>
  );
}

export default WhichStage;

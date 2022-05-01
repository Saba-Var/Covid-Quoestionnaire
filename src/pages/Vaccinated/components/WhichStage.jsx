import { RadioInputContainer, ErrorMessage, RadioButton } from 'components';
import { NotRegistered } from 'pages/Vaccinated/components/suggestions';
import FormContext from 'state/form-context';
import { useContext } from 'react';

function WhichStage(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const inputData = {
    checked: ctx.state.vaccination_stage,
    register: props.hookForm.register,
    target: 'vaccination_stage',
  };
  return (
    <>
      <RadioInputContainer question='აირჩიე რა ეტაპზე ხარ?*'>
        <RadioButton
          value={'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'}
          inputData={inputData}
          ctxValue={'first_dosage_and_registered_on_the_second'}
        />
        <RadioButton
          value={'სრულად აცრილი ვარ'}
          inputData={inputData}
          ctxValue={'fully_vaccinated'}
        />
        <RadioButton
          value={'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'}
          inputData={inputData}
          ctxValue={'first_dosage_and_not_registered_yet'}
        />
        {props.hookForm.errors.vaccination_stage && (
          <ErrorMessage text={errorMessage} />
        )}
      </RadioInputContainer>
      {props.formState.vaccination_stage ===
        'first_dosage_and_not_registered_yet' && <NotRegistered />}
    </>
  );
}

export default WhichStage;

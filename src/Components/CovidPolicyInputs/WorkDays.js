import RadioInputContainer from 'Components/Reusables/RadioInputContainer';
import ErrorMessage from 'Components/Reusables/ErrorMessage';
import RadioButton from 'Components/Reusables/RadioButton';
import FormContext from 'context/form-context';
import { useContext } from 'react';
function WorkDays(props) {
  const ctx = useContext(FormContext);
  const inputData = {
    checked: ctx.state.vaccinated.workDays,
    register: props.register,
    target: 'workDays',
  };
  return (
    <RadioInputContainer question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
      <RadioButton value='0' inputData={inputData} />
      <RadioButton value='1' inputData={inputData} />
      <RadioButton value='2' inputData={inputData} />
      <RadioButton value='3' inputData={inputData} />
      <RadioButton value='4' inputData={inputData} />
      <RadioButton value='5' inputData={inputData} />
      {props.errors.workDays && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputContainer>
  );
}

export default WorkDays;

import { RadioInputContainer, ErrorMessage, RadioButton } from 'components';
import FormContext from 'state/FormContext';
import { useContext } from 'react';
function WorkDays(props) {
  const ctx = useContext(FormContext);
  const inputData = {
    checked: ctx.state.number_of_days_from_office,
    register: props.register,
    target: 'number_of_days_from_office',
  };

  return (
    <RadioInputContainer question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
      <RadioButton value={0} inputData={inputData} ctxValue={0} />
      <RadioButton value={1} inputData={inputData} ctxValue={1} />
      <RadioButton value={2} inputData={inputData} ctxValue={2} />
      <RadioButton value={3} inputData={inputData} ctxValue={3} />
      <RadioButton value={4} inputData={inputData} ctxValue={4} />
      <RadioButton value={5} inputData={inputData} ctxValue={5} />
      {props.errors.number_of_days_from_office && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputContainer>
  );
}

export default WorkDays;

import RadioInputContainer from '../RadioInputContainer';
import RadioButton from '../RadioButton';
import ErrorMessage from '../ErrorMessage';
function WorkDays(props) {
  return (
    <RadioInputContainer question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
      <RadioButton target='workDays' register={props.register} value='0' />
      <RadioButton target='workDays' register={props.register} value='1' />
      <RadioButton target='workDays' register={props.register} value='2' />
      <RadioButton target='workDays' register={props.register} value='3' />
      <RadioButton target='workDays' register={props.register} value='4' />
      <RadioButton target='workDays' register={props.register} value='5' />
      {props.errors.workDays && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputContainer>
  );
}

export default WorkDays;

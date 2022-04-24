import RadioInputWrapper from '../RadioInputWrapper';
import RadioButton from '../RadioButton';
import ErrorMessage from '../ErrorMessage';
function WorkDays(props) {
  return (
    <RadioInputWrapper question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
      <RadioButton target='workDays' register={props.register} value='0' />
      <RadioButton target='workDays' register={props.register} value='1' />
      <RadioButton target='workDays' register={props.register} value='2' />
      <RadioButton target='workDays' register={props.register} value='3' />
      <RadioButton target='workDays' register={props.register} value='4' />
      <RadioButton target='workDays' register={props.register} value='5' />
      {props.errors.workDays && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputWrapper>
  );
}

export default WorkDays;

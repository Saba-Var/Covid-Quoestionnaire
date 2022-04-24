import RadioInputContainer from '../../Components/RadioInputContainer';
import RadioButton from '../RadioButton';
import ErrorMessage from '../ErrorMessage';

function Frequency(props) {
  return (
    <RadioInputContainer question='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'>
      <RadioButton
        target='frequency'
        register={props.register}
        value='კვირაში ორჯერ'
      />
      <RadioButton
        target='frequency'
        register={props.register}
        value='კვირაში ერთხელ'
      />
      <RadioButton
        target='frequency'
        register={props.register}
        value='ორ კვირაში ერთხელ'
      />
      <RadioButton
        target='frequency'
        register={props.register}
        value='თვეში ერთხელ'
      />
      {props.errors.frequency && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputContainer>
  );
}

export default Frequency;

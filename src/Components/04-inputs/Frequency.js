import RadioInputContainer from '../../Components/RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import RadioButton from '../RadioButton';
import { useContext } from 'react';
function Frequency(props) {
  const ctx = useContext(FormContext);
  const inputData = {
    checked: ctx.state.vaccinated.frequency,
    register: props.register,
    target: 'frequency',
  };
  return (
    <RadioInputContainer question='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'>
      <RadioButton value='კვირაში ორჯერ' inputData={inputData} />
      <RadioButton value='კვირაში ერთხელ' inputData={inputData} />
      <RadioButton value='ორ კვირაში ერთხელ' inputData={inputData} />
      <RadioButton value='თვეში ერთხელ' inputData={inputData} />
      {props.errors.frequency && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputContainer>
  );
}

export default Frequency;

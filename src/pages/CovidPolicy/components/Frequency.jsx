import { RadioInputContainer, ErrorMessage, RadioButton } from 'components';
import FormContext from 'state/form-context';
import { useContext } from 'react';
function Frequency(props) {
  const ctx = useContext(FormContext);
  const inputData = {
    checked: ctx.state.vaccinated.non_formal_meetings,
    register: props.register,
    target: 'non_formal_meetings',
  };
  return (
    <RadioInputContainer question='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'>
      <RadioButton
        value='კვირაში ორჯერ'
        inputData={inputData}
        ctxValue={'twice_a_week'}
      />
      <RadioButton
        value='კვირაში ერთხელ'
        inputData={inputData}
        ctxValue={'once_a_week'}
      />
      <RadioButton
        value='ორ კვირაში ერთხელ'
        inputData={inputData}
        ctxValue={'once_in_a_two_weeks'}
      />
      <RadioButton
        value='თვეში ერთხელ'
        inputData={inputData}
        ctxValue={'once_in_a_month'}
      />
      {props.errors.non_formal_meetings && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputContainer>
  );
}

export default Frequency;

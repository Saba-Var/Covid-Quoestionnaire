import FormContext from 'state/formContext';
import { useContext } from 'react';
import {
  RadioButtonUnregister,
  RadioInputContainer,
  ErrorMessage,
} from 'components';
function HadCovid(props) {
  const ctx = useContext(FormContext);
  const hookForm = {
    checked: ctx.state.had_covid,
    unregister: props.unregister,
    register: props.register,
    component: 'had_covid',
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='გაქვს გადატანილი Covid-19*?'>
      <RadioButtonUnregister value='კი ' hookForm={hookForm} ctxValue={'yes'} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} ctxValue={'no'} />
      <RadioButtonUnregister
        value='ახლა მაქვს'
        hookForm={hookForm}
        ctxValue={'have_right_now'}
      />
      {props.errors.had_covid && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default HadCovid;

import RadioButtonUnregister from 'Components/RadioButtonUnregister';
import RadioInputContainer from 'Components/RadioInputContainer';
import FormContext from 'context/form-context';
import ErrorMessage from 'Components/ErrorMessage';
import { useContext } from 'react';

function HadCovid(props) {
  const ctx = useContext(FormContext);
  const hookForm = {
    checked: ctx.state.covid.HadCovid,
    unregister: props.unregister,
    register: props.register,
    component: 'HadCovid',
  };

  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='გაქვს გადატანილი Covid-19*?'>
      <RadioButtonUnregister value='კი ' hookForm={hookForm} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} />
      <RadioButtonUnregister value='ახლა მაქვს' hookForm={hookForm} />
      {props.errors.HadCovid && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default HadCovid;

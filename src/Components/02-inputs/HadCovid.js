import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import { useContext } from 'react';

function HadCovid(props) {
  const ctx = useContext(FormContext);
  const hookForm = {
    register: props.register,
    component: 'HadCovid',
    unregister: props.unregister,
    checked: ctx.state.covid.HadCovid,
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

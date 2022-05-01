import FormContext from 'state/form-context';
import { useContext } from 'react';
import {
  RadioButtonUnregister,
  RadioInputContainer,
  ErrorMessage,
} from 'components';
function HadVaccinated(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const ctx = useContext(FormContext);
  const hookForm = {
    checked: ctx.state.covid.HadCovid,
    unregister: props.unregister,
    component: 'had_vaccine',
    register: props.hookForm.register,
  };
  return (
    <RadioInputContainer question='უკვე აცრილი ხარ?*'>
      <RadioButtonUnregister value='კი' hookForm={hookForm} ctxValue={'yes'} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} ctxValue={'no'} />
      {props.hookForm.errors.had_vaccine && (
        <ErrorMessage text={errorMessage} />
      )}
    </RadioInputContainer>
  );
}

export default HadVaccinated;

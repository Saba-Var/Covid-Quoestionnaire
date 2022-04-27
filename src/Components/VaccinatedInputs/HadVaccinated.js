import RadioButtonUnregister from 'Components/RadioButtonUnregister';
import RadioInputContainer from 'Components/RadioInputContainer';
import ErrorMessage from 'Components/ErrorMessage';
import FormContext from 'context/form-context';
import { useContext } from 'react';
function HadVaccinated(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const ctx = useContext(FormContext);
  const hookForm = {
    checked: ctx.state.covid.HadCovid,
    unregister: props.unregister,
    component: 'HadVaccinated',
    register: props.hookForm.register,
  };
  return (
    <RadioInputContainer question='უკვე აცრილი ხარ?*'>
      <RadioButtonUnregister value='კი' hookForm={hookForm} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} />
      {props.hookForm.errors.HadVaccinated && (
        <ErrorMessage text={errorMessage} />
      )}
    </RadioInputContainer>
  );
}

export default HadVaccinated;
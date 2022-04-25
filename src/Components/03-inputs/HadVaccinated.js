import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import ErrorMessage from '../ErrorMessage';
import { useContext } from 'react';
import FormContext from '../../context/form-context';
function HadVaccinated(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const hookForm = {
    register: props.register,
    component: 'HadVaccinated',
    unregister: props.unregister,
    checked: ctx.state.covid.HadCovid,
  };
  return (
    <RadioInputContainer question='უკვე აცრილი ხარ?*'>
      <RadioButtonUnregister value='კი' hookForm={hookForm} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} />
      {props.errors.HadVaccinated && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default HadVaccinated;

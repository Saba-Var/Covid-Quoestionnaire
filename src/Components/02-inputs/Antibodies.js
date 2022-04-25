import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import { useContext } from 'react';

function AntiBodies(props) {
  const ctx = useContext(FormContext);
  const hookForm = {
    checked: ctx.state.covid.Antibodies,
    unregister: props.unregister,
    register: props.register,
    component: 'Antibodies',
  };

  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <RadioButtonUnregister value='კი' hookForm={hookForm} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} />
      {props.errors.Antibodies && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default AntiBodies;

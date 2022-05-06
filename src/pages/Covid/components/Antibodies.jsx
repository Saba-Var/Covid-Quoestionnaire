import FormContext from 'state/FormContext';
import { useContext } from 'react';
import {
  RadioButtonUnregister,
  RadioInputContainer,
  ErrorMessage,
} from 'components';

function AntiBodies(props) {
  const ctx = useContext(FormContext);
  const hookForm = {
    checked: ctx.state.had_antibody_test,
    unregister: props.unregister,
    register: props.register,
    component: 'had_antibody_test',
  };

  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <RadioButtonUnregister value='კი' hookForm={hookForm} ctxValue={true} />
      <RadioButtonUnregister value='არა' hookForm={hookForm} ctxValue={false} />
      {props.errors.had_antibody_test && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default AntiBodies;

import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import { useContext } from 'react';

function Antibodies(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <RadioButtonUnregister
        target='antibodies'
        value='კი'
        component='Antibodies'
        unregister={props.unregister}
        register={props.register}
        checked={ctx.state.covid.antibodies}
      />
      <RadioButtonUnregister
        target='antibodies'
        value='არა'
        component='Antibodies'
        unregister={props.unregister}
        register={props.register}
        checked={ctx.state.covid.antibodies}
      />
      {props.errors.antibodies && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default Antibodies;

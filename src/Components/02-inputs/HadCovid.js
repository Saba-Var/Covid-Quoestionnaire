import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import { useContext } from 'react';

function HadCovid(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='გაქვს გადატანილი Covid-19*?'>
      <RadioButtonUnregister
        target='HadCovid'
        value='კი '
        component='HadCovid'
        unregister={props.unregister}
        register={props.register}
        checked={ctx.state.covid.HadCovid}
      />
      <RadioButtonUnregister
        target='HadCovid'
        value='არა'
        component='HadCovid'
        unregister={props.unregister}
        register={props.register}
        checked={ctx.state.covid.HadCovid}
      />
      <RadioButtonUnregister
        target='HadCovid'
        value='ახლა მაქვს'
        component='HadCovid'
        unregister={props.unregister}
        register={props.register}
        checked={ctx.state.covid.HadCovid}
      />
      {props.errors.HadCovid && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default HadCovid;

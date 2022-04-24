import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import ErrorMessage from '../ErrorMessage';

function HadCovid(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='გაქვს გადატანილი Covid-19*?'>
      <RadioButtonUnregister
        target='HadCovid'
        value='კი'
        component='HadCovid'
        unregister={props.unregister}
        register={props.register}
      />
      <RadioButtonUnregister
        target='HadCovid'
        value='არა'
        component='HadCovid'
        unregister={props.unregister}
        register={props.register}
      />
      <RadioButtonUnregister
        target='HadCovid'
        value='ახლა მაქვს'
        component='HadCovid'
        unregister={props.unregister}
        register={props.register}
      />
      {props.errors.HadCovid && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default HadCovid;

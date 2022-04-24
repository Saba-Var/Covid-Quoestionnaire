import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import ErrorMessage from '../ErrorMessage';

function Antibodies(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputContainer question='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <RadioButtonUnregister
        target='antibodies'
        value='კი'
        component='Antibodies'
        unregister={props.unregister}
        register={props.register}
      />
      <RadioButtonUnregister
        target='antibodies'
        value='არა'
        component='Antibodies'
        unregister={props.unregister}
        register={props.register}
      />
      {props.errors.antibodies && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default Antibodies;

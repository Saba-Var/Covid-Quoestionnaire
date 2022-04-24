import RadioButtonUnregister from '../RadioButtonUnregister';
import RadioInputContainer from '../RadioInputContainer';
import ErrorMessage from '../ErrorMessage';

function HadVaccinated(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';

  return (
    <RadioInputContainer question='უკვე აცრილი ხარ?*'>
      <RadioButtonUnregister
        target='hadVaccinated'
        value='კი'
        component='HadVaccinated'
        unregister={props.unregister}
        register={props.register}
      />
      <RadioButtonUnregister
        target='hadVaccinated'
        value='არა'
        component='HadVaccinated'
        unregister={props.unregister}
        register={props.register}
      />
      {props.errors.hadVaccinated && <ErrorMessage text={errorMessage} />}
    </RadioInputContainer>
  );
}

export default HadVaccinated;

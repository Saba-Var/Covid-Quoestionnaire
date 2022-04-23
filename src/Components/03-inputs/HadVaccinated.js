import ErrorMessage from '../ErrorMessage';
import RadioInputWrapper from '../RadioInputWrapper';

function HadVaccinated(props) {
  const updateValue = (value) => {
    props.setValue('hadVaccinated', value, { shouldValidate: true });
    if (value === 'კი') props.unregister('waiting');
    else props.unregister('stage');
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';

  return (
    <RadioInputWrapper question='უკვე აცრილი ხარ?*'>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('hadVaccinated', { required: errorMessage })}
          onClick={() => updateValue('კი')}
          type='radio'
          name='hadVaccinated'
          value='კი'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>კი</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('hadVaccinated', { required: errorMessage })}
          onClick={() => updateValue('არა')}
          type='radio'
          name='hadVaccinated'
          value='არა'
          className='w-6 h-6'
        />
        <span>არა</span>
      </label>
      {props.errors.hadVaccinated && <ErrorMessage text={errorMessage} />}
    </RadioInputWrapper>
  );
}

export default HadVaccinated;

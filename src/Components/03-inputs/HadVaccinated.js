import ErrorMessage from '../ErrorMessage';
import RadioInputWrapper from '../RadioInputWrapper';

function HadVaccinated(props) {
  const unregister = (value) => {
    if (value === 'კი') props.unregister('waiting');
    else props.unregister('stage');
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';

  return (
    <RadioInputWrapper question='უკვე აცრილი ხარ?*'>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('hadVaccinated', { required: errorMessage })}
          onClick={() => unregister('კი')}
          type='radio'
          value='კი'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>კი</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('hadVaccinated', { required: errorMessage })}
          onClick={() => unregister('არა')}
          type='radio'
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

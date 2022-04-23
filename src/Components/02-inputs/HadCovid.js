import ErrorMessage from '../ErrorMessage';
import RadioInputWrapper from '../RadioInputWrapper';
function HadCovid(props) {
  const updateValue = (value) => {
    props.setValue('HadCovid', value, { shouldValidate: true });
    if (value !== 'YES') {
      props.unregister('antibodies');
      props.unregister('date');
      props.unregister('count');
      props.unregister('antibody count');
    }
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputWrapper question='გაქვს გადატანილი Covid-19*?'>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          onClick={() => updateValue('YES')}
          {...props.register('HadCovid', { required: errorMessage })}
          type='radio'
          name='hadCovid'
          value='YES'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>კი</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('HadCovid', { required: errorMessage })}
          onClick={() => {
            updateValue('NO');
          }}
          type='radio'
          name='hadCovid'
          value='NO'
          className='w-6 h-6'
        />
        <span>არა</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('HadCovid', { required: errorMessage })}
          onClick={() => {
            updateValue('NOW');
          }}
          type='radio'
          name='hadCovid'
          value='NOW'
          className='w-6 h-6'
        />
        <span>ახლა მაქვს</span>
      </label>
      {props.errors.HadCovid && <ErrorMessage text={errorMessage} />}
    </RadioInputWrapper>
  );
}

export default HadCovid;

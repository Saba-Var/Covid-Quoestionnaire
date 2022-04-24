import RadioInputWrapper from '../RadioInputWrapper';
import ErrorMessage from '../ErrorMessage';
function HadCovid(props) {
  const unregister = (value) => {
    if (value !== 'კი') {
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
          onClick={() => unregister('კი')}
          {...props.register('HadCovid', { required: errorMessage })}
          type='radio'
          value='კი'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>კი</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('HadCovid', { required: errorMessage })}
          onClick={() => {
            unregister('არა');
          }}
          type='radio'
          value='არა'
          className='w-6 h-6'
        />
        <span>არა</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('HadCovid', { required: errorMessage })}
          onClick={() => {
            unregister('ახლა მაქვს');
          }}
          type='radio'
          value='ახლა მაქვს'
          className='w-6 h-6'
        />
        <span>ახლა მაქვს</span>
      </label>
      {props.errors.HadCovid && <ErrorMessage text={errorMessage} />}
    </RadioInputWrapper>
  );
}

export default HadCovid;

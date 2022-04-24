import RadioInputWrapper from '../RadioInputWrapper';
import ErrorMessage from '../ErrorMessage';

function Antibodies(props) {
  const unregister = (value) => {
    if (value === 'კი') props.unregister('date');
    else {
      props.unregister('count');
      props.unregister('antibody count');
    }
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputWrapper question='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <label className='flex items-center gap-5  text-xl font-medium text-charcoal'>
        <input
          {...props.register('antibodies', { required: true })}
          onClick={() => unregister('კი')}
          type='radio'
          value='კი'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>კი</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('antibodies', { required: true })}
          onClick={() => unregister('არა')}
          type='radio'
          value='არა'
          className='w-6 h-6'
        />
        <span>არა</span>
      </label>
      {props.errors.antibodies && <ErrorMessage text={errorMessage} />}
    </RadioInputWrapper>
  );
}

export default Antibodies;

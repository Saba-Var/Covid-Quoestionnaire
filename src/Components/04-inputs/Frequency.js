import RadioInputWrapper from '../../Components/RadioInputWrapper';
import ErrorMessage from '../ErrorMessage';

function Frequency(props) {
  const updateValue = (value) => {
    props.setValue('frequency', value, { shouldValidate: true });
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputWrapper question='უკვე აცრილი ხარ?*'>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('frequency', { required: errorMessage })}
          onClick={() => updateValue('კვირაში ორჯერ')}
          type='radio'
          name='frequency'
          value='კვირაში ორჯერ'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>კვირაში ორჯერ</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('frequency', { required: errorMessage })}
          onClick={() => updateValue('კვირაში ერთხელ')}
          type='radio'
          name='frequency'
          value='კვირაში ერთხელ'
          className='w-6 h-6'
        />
        <span>კვირაში ერთხელ</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('frequency', { required: errorMessage })}
          onClick={() => updateValue('ორ კვირაში ერთხელ')}
          type='radio'
          name='frequency'
          value='ორ კვირაში ერთხელ'
          className='w-6 h-6'
        />
        <span>ორ კვირაში ერთხელ</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('frequency', { required: errorMessage })}
          onClick={() => updateValue('თვეში ერთხელ')}
          type='radio'
          name='frequency'
          value='თვეში ერთხელ'
          className='w-6 h-6'
        />
        <span>თვეში ერთხელ</span>
      </label>
      {props.errors.frequency && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputWrapper>
  );
}

export default Frequency;

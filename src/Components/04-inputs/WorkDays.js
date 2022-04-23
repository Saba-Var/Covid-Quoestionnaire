import RadioInputWrapper from '../RadioInputWrapper';
import ErrorMessage from '../ErrorMessage';
function WorkDays(props) {
  const updateValue = (value) => {
    props.setValue('workDays', value, { shouldValidate: true });
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <RadioInputWrapper question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('workDays', { required: errorMessage })}
          onClick={() => updateValue('0')}
          type='radio'
          name='workDays'
          className='w-6 h-6 bg-red-400 text-red-400'
        />
        <span>0</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('workDays', { required: errorMessage })}
          onClick={() => updateValue('1')}
          type='radio'
          name='workDays'
          className='w-6 h-6'
        />
        <span>1</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('workDays', { required: errorMessage })}
          onClick={() => updateValue('2')}
          type='radio'
          name='workDays'
          className='w-6 h-6'
        />
        <span>2</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('workDays', { required: errorMessage })}
          onClick={() => updateValue('3')}
          type='radio'
          name='workDays'
          className='w-6 h-6'
        />
        <span>3</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('workDays', { required: errorMessage })}
          onClick={() => updateValue('4')}
          type='radio'
          name='workDays'
          className='w-6 h-6'
        />
        <span>4</span>
      </label>
      <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
        <input
          {...props.register('workDays', { required: errorMessage })}
          onClick={() => updateValue('5')}
          type='radio'
          name='workDays'
          className='w-6 h-6'
        />
        <span>5</span>
      </label>
      {props.errors.workDays && (
        <ErrorMessage text='ამ ველის შევსება სავალდებულოა' />
      )}
    </RadioInputWrapper>
  );
}

export default WorkDays;

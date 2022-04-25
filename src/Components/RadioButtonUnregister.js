function RadioButtonUnregister(props) {
  const hookForm = props.hookForm;
  const unregister = (value) => {
    if (hookForm.component === 'Antibodies') {
      if (value === 'კი') hookForm.unregister('date');
      else {
        hookForm.unregister('count');
        hookForm.unregister('antibody count');
      }
    } else if (hookForm.component === 'HadCovid') {
      if (value !== 'კი') {
        hookForm.unregister('Antibodies');
        hookForm.unregister('date');
        hookForm.unregister('count');
        hookForm.unregister('antibody count');
      }
    } else {
      if (value === 'კი') hookForm.unregister('waiting');
      else hookForm.unregister('stage');
    }
  };

  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
      <input
        {...hookForm.register(hookForm.component, {
          required: errorMessage,
        })}
        onClick={() => unregister(props.value)}
        value={props.value}
        type='radio'
        className='w-6 h-6'
        defaultChecked={props.value === hookForm.checked}
      />
      <span>{props.value}</span>
    </label>
  );
}

export default RadioButtonUnregister;

function RadioButtonUnregister(props) {
  const hookForm = props.hookForm;
  const unregister = (value) => {
    if (hookForm.component === 'had_antibody_test') {
      if (value === 'კი') hookForm.unregister('covid_sickness_date');
      else {
        hookForm.unregister('antibodies.test_date');
        hookForm.unregister('antibodies.number');
      }
    } else if (hookForm.component === 'HadCovid') {
      if (value !== 'კი') {
        hookForm.unregister('had_antibody_test');
        hookForm.unregister('covid_sickness_date');
        hookForm.unregister('antibodies');
      }
    } else {
      if (value === 'კი') hookForm.unregister('i_am_waiting');
      else hookForm.unregister('vaccination_stage');
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
        value={props.ctxValue}
        type='radio'
        className='w-6 h-6'
        defaultChecked={props.ctxValue === hookForm.checked}
      />
      <span>{props.value}</span>
    </label>
  );
}

export default RadioButtonUnregister;

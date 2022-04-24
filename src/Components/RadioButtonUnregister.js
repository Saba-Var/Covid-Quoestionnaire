function RadioButtonUnregister(props) {
  const unregister = (value) => {
    if (props.component === 'Antibodies') {
      if (value === 'კი') props.unregister('date');
      else {
        props.unregister('count');
        props.unregister('antibody count');
      }
    } else if (props.component === 'HadCovid') {
      if (value !== 'კი') {
        props.unregister('antibodies');
        props.unregister('date');
        props.unregister('count');
        props.unregister('antibody count');
      }
    } else {
      if (value === 'კი') props.unregister('waiting');
      else props.unregister('stage');
    }
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
      <input
        {...props.register(props.target, { required: errorMessage })}
        onClick={() => unregister(props.value)}
        value={props.value}
        type='radio'
        className='w-6 h-6'
      />
      <span>{props.value}</span>
    </label>
  );
}

export default RadioButtonUnregister;

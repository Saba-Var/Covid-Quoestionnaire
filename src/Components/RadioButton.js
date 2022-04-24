function RadioButton(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
      <input
        {...props.register(props.target, { required: errorMessage })}
        value={props.value}
        type='radio'
        className='w-6 h-6'
      />
      <span>{props.value}</span>
    </label>
  );
}

export default RadioButton;

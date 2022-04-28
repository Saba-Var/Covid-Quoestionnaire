function RadioButton(props) {
  const inputData = props.inputData;
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <label className='flex items-center gap-5 text-xl font-medium text-charcoal z-[99999] '>
      <input
        {...inputData.register(inputData.target, { required: errorMessage })}
        value={props.value}
        type='radio'
        className='w-6 h-6 z-[99999]'
        defaultChecked={props.value === inputData.checked}
      />
      <span>{props.value}</span>
    </label>
  );
}

export default RadioButton;

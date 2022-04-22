function InputWrapper(props) {
  return (
    <div className='mb-4 h-32'>
      <div className='flex flex-col gap-4'>{props.children}</div>
      {props.target && (
        <p className='text-red-500 pl-5 text-base'>{props.target.message}</p>
      )}
    </div>
  );
}

export default InputWrapper;

import ErrorMessage from './ErrorMessage';
function InputWrapper(props) {
  return (
    <div className='mb-4 h-32'>
      <div className='flex flex-col gap-4'>{props.children}</div>
      <div className='pl-5'>
        {props.target && <ErrorMessage text={props.target.message} />}
      </div>
    </div>
  );
}

export default InputWrapper;

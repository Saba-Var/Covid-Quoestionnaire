import ErrorMesage from './ErrorMessage';
function InputWrapper(props) {
  return (
    <div className='mb-4 h-32'>
      <div className='flex flex-col gap-4'>{props.children}</div>
      {props.target && <ErrorMesage text={props.target.message} />}
    </div>
  );
}

export default InputWrapper;

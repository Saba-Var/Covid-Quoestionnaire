function RadioInputContainer(props) {
  return (
    <div>
      <p className='font-bold text-tiny mb-4'>{props.question}</p>
      <div className='flex flex-col pl-5'>
        <div className='flex flex-col gap-5'>{props.children}</div>
      </div>
    </div>
  );
}

export default RadioInputContainer;

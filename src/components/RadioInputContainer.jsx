function RadioInputContainer(props) {
  return (
    <div className='z-[99999]'>
      <p className='font-bold 2xl:text-tiny mb-4 z-[99999]'>{props.question}</p>
      <div className='flex flex-col pl-5'>
        <div className='flex flex-col gap-5'>{props.children}</div>
      </div>
    </div>
  );
}

export default RadioInputContainer;

import InputWrapper from '../InputWrapper';

function LastName(props) {
  return (
    <InputWrapper target={props.errors.lastName}>
      <label className='font-bold text-tiny '>გვარი*</label>
      <input
        {...props.register('lastName', {
          required: `გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან`,
          validate: {
            minLength: (v) => props.minLength(v, 'გვარის'),
            onlyLetters: (v) => props.onlyLetters(v, 'გვარის'),
          },
        })}
        type='text'
        className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
          props.errors.lastName && 'bg-red-200'
        }`}
        placeholder='ჯუღაშვილი'
      />
    </InputWrapper>
  );
}

export default LastName;

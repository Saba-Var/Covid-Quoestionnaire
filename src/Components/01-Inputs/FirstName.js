import InputWrapper from '../InputWrapper';

function FirstName(props) {
  return (
    <InputWrapper target={props.errors.firstName}>
      <label className='font-bold text-tiny'>სახელი*</label>
      <input
        {...props.register('firstName', {
          required: `სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან`,
          validate: {
            minLength: (v) => props.minLength(v, 'სახელის'),
            onlyLetters: (v) => props.onlyLetters(v, 'სახელის'),
          },
        })}
        type='text'
        className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
          props.errors.firstName && 'bg-red-200'
        }`}
        placeholder='იოსებ'
      />
    </InputWrapper>
  );
}

export default FirstName;

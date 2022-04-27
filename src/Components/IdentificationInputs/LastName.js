import InputWrapper from 'Components/InputWrapper';

function LastName(props) {
  const hookForm = props.hookForm;
  return (
    <InputWrapper target={hookForm.errors.lastName}>
      <label className='font-bold text-tiny'>გვარი*</label>
      <input
        {...hookForm.register('lastName', {
          required: `გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან`,
          validate: {
            minLength: (v) => hookForm.minLength(v, 'გვარის'),
            onlyLetters: (v) => hookForm.onlyLetters(v, 'გვარის'),
          },
        })}
        type='text'
        className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
          hookForm.errors.lastName && 'bg-red-200'
        }`}
        placeholder='ჯუღაშვილი'
      />
    </InputWrapper>
  );
}

export default LastName;

import { InputWrapper } from 'components';
function LastName(props) {
  const hookForm = props.hookForm;
  return (
    <InputWrapper target={hookForm.errors.last_name}>
      <label className='font-bold text-tiny'>გვარი*</label>
      <input
        dataTestId='lastName'
        {...hookForm.register('last_name', {
          required: `გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`,
          validate: {
            minLength: (v) => hookForm.minLength(v, 'გვარის'),
            onlyLetters: (v) => hookForm.onlyLetters(v, 'გვარის'),
          },
        })}
        type='text'
        className='border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128'
        placeholder='ჯუღაშვილი'
      />
    </InputWrapper>
  );
}

export default LastName;

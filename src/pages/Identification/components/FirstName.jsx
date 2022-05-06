import { InputWrapper } from 'components';
function FirstName(props) {
  const hookForm = props.hookForm;
  return (
    <InputWrapper target={hookForm.errors.first_name}>
      <label className='font-bold text-tiny'>სახელი*</label>
      <input
        dataTestId='firstName'
        {...hookForm.register('first_name', {
          required: `სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`,
          validate: {
            minLength: (v) => hookForm.minLength(v, 'სახელის'),
            onlyLetters: (v) => hookForm.onlyLetters(v, 'სახელის'),
          },
        })}
        type='text'
        className='border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128'
        placeholder='იოსებ'
      />
    </InputWrapper>
  );
}

export default FirstName;

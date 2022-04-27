import InputWrapper from 'Components/InputWrapper';

function Email(props) {
  return (
    <InputWrapper target={props.errors.email}>
      <label className='font-bold text-tiny '>მეილი*</label>
      <input
        {...props.register('email', {
          required: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
          validate: {
            emailFormat: (v) =>
              v.includes('@redberry.ge') ||
              'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
          },
        })}
        type='email'
        className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
          props.errors.email && 'bg-red-200'
        }`}
        placeholder='fbi@redberry.ge'
      />
    </InputWrapper>
  );
}

export default Email;

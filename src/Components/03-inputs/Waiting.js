import ErrorMessage from '../ErrosMessage';
import RadioInputWrapper from '../RadioInputWrapper';

function Waiting(props) {
  const updateValue = (value) => {
    props.setValue('stage', value, { shouldValidate: true });
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option1 = 'დარეგისტრირებული ვარ და ველოდები რიცხვს';
  const option2 = 'არ ვგეგმავ';
  const option3 = 'გადატანილი მაქვს და ვგეგმავ აცრას';
  return (
    <>
      <RadioInputWrapper question='რას ელოდები?*'>
        <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
          <input
            {...props.register('waiting', { required: errorMessage })}
            onClick={() => updateValue(option1)}
            type='radio'
            name='waiting'
            value={option1}
            className='w-6 h-6 bg-red-400 text-red-400'
          />
          <span>{option1}</span>
        </label>
        <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
          <input
            {...props.register('waiting', { required: errorMessage })}
            onClick={() => updateValue(option2)}
            type='radio'
            name='waiting'
            value={option2}
            className='w-6 h-6'
          />
          <span>{option2}</span>
        </label>
        <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
          <input
            {...props.register('waiting', { required: errorMessage })}
            onClick={() => updateValue(option3)}
            type='radio'
            name='waiting'
            value={option3}
            className='w-6 h-6'
          />
          <span>{option3}</span>
        </label>
        {props.errors.waiting && <ErrorMessage text={errorMessage} />}
      </RadioInputWrapper>
      {props.formState.stage === option2 && (
        <div className='pl-12'>
          <p className='text-xl font-normal text-charcoal'>
            👉
            <a
              href='https://booking.moh.gov.ge/'
              className='text-sky-600 font-medium'
            >
              https://booking.moh.gov.ge/
            </a>
          </p>
        </div>
      )}
      {props.formState.stage === option3 && (
        <div className='pl-12'>
          <p className='text-xl font-normal text-charcoal'>
            ახალი პროტოკოლით კოვიდის გადატანიდან 1
            <br /> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
            <br />
            <br />
            👉რეგისტრაციის ბმული
            <br />
            <a
              href='https://booking.moh.gov.ge/'
              className='text-sky-600 font-medium'
            >
              https://booking.moh.gov.ge/
            </a>
          </p>
        </div>
      )}
    </>
  );
}

export default Waiting;

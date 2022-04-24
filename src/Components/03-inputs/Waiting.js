import RadioInputContainer from '../RadioInputContainer';
import ErrorMessage from '../ErrorMessage';
import RadioButton from '../RadioButton';

function Waiting(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option1 = 'დარეგისტრირებული ვარ და ველოდები რიცხვს';
  const option2 = 'არ ვგეგმავ';
  const option3 = 'გადატანილი მაქვს და ვგეგმავ აცრას';
  return (
    <>
      <RadioInputContainer question='რას ელოდები?*'>
        <RadioButton
          target='waiting'
          register={props.register}
          value={option1}
        />
        <RadioButton
          target='waiting'
          register={props.register}
          value={option2}
        />
        <RadioButton
          target='waiting'
          register={props.register}
          value={option3}
        />
        {props.errors.waiting && <ErrorMessage text={errorMessage} />}
      </RadioInputContainer>
      {props.formState.waiting === option2 && (
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
      {props.formState.waiting === option3 && (
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

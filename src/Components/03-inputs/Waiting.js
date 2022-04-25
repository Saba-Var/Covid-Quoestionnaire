import RadioInputContainer from '../RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import RadioButton from '../RadioButton';
import { useContext } from 'react';

function Waiting(props) {
  const ctx = useContext(FormContext);
  const option1 = 'დარეგისტრირებული ვარ და ველოდები რიცხვს';
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option3 = 'გადატანილი მაქვს და ვგეგმავ აცრას';
  const option2 = 'არ ვგეგმავ';
  const inputData = {
    target: 'waiting',
    register: props.register,
    checked: ctx.state.vaccinated.waiting,
  };
  return (
    <>
      <RadioInputContainer question='რას ელოდები?*'>
        <RadioButton value={option1} inputData={inputData} />
        <RadioButton value={option2} inputData={inputData} />
        <RadioButton value={option3} inputData={inputData} />
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

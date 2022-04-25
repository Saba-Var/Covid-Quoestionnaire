import RadioInputContainer from '../RadioInputContainer';
import FormContext from '../../context/form-context';
import ErrorMessage from '../ErrorMessage';
import RadioButton from '../RadioButton';
import { useContext } from 'react';

function WhichStage(props) {
  const ctx = useContext(FormContext);
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option1 = 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე';
  const option2 = 'სრულად აცრილი ვარ';
  const option3 = 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე';
  const inputData = {
    checked: ctx.state.vaccinated.stage,
    register: props.register,
    target: 'stage',
  };
  return (
    <>
      <RadioInputContainer question='აირჩიე რა ეტაპზე ხარ?*'>
        <RadioButton value={option1} inputData={inputData} />
        <RadioButton value={option2} inputData={inputData} />
        <RadioButton value={option3} inputData={inputData} />
        {props.errors.stage && <ErrorMessage text={errorMessage} />}
      </RadioInputContainer>
      {props.formState.stage === option3 && (
        <div className='pl-12'>
          <p className='text-xl font-normal text-charcoal'>
            რომ არ გადადო,
            <br /> ბარემ ახლავე დარეგისტრირდი <br />
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

export default WhichStage;

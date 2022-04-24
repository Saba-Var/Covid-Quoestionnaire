import RadioInputContainer from '../RadioInputContainer';
import ErrorMessage from '../ErrorMessage';
import RadioButton from '../RadioButton';

function WhichStage(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option1 = 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე';
  const option2 = 'სრულად აცრილი ვარ';
  const option3 = 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე';
  return (
    <>
      <RadioInputContainer question='აირჩიე რა ეტაპზე ხარ?*'>
        <RadioButton target='stage' register={props.register} value={option1} />
        <RadioButton target='stage' register={props.register} value={option2} />
        <RadioButton target='stage' register={props.register} value={option3} />
        {props.errors.stage && <ErrorMessage text={errorMessage} />}
      </RadioInputContainer>
      {props.formState.stage === option3 && (
        <div className='pl-12'>
          <p className='text-xl'>
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

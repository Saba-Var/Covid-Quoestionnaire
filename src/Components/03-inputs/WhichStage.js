import ErrorMessage from '../ErrosMessage';
import RadioInputWrapper from '../RadioInputWrapper';

function WhichStage(props) {
  const updateValue = (value) => {
    props.setValue('stage', value, { shouldValidate: true });
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const option1 = 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე';
  const option2 = 'სრულად აცრილი ვარ';
  const option3 = 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე';
  return (
    <>
      <RadioInputWrapper question='აირჩიე რა ეტაპზე ხარ?*'>
        <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
          <input
            {...props.register('stage', { required: errorMessage })}
            onClick={() => updateValue(option1)}
            type='radio'
            name='stage'
            value={option1}
            className='w-6 h-6 bg-red-400 text-red-400'
          />
          <span>{option1}</span>
        </label>
        <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
          <input
            {...props.register('stage', { required: errorMessage })}
            onClick={() => updateValue(option2)}
            type='radio'
            name='stage'
            value={option2}
            className='w-6 h-6'
          />
          <span>{option2}</span>
        </label>
        <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
          <input
            {...props.register('stage', { required: errorMessage })}
            onClick={() => updateValue(option3)}
            type='radio'
            name='stage'
            value={option3}
            className='w-6 h-6'
          />
          <span>{option3}</span>
        </label>
        {props.errors.stage && <ErrorMessage text={errorMessage} />}
      </RadioInputWrapper>
      {props.formState.stage === option3 && (
        <div className='pl-12'>
          <p className='text-xl'>
            რომ არ გადადო,
            <br /> ბარემ ახლავე დარეგისტრირდი <br />{' '}
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

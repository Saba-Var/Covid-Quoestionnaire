import { ErrorMessage } from 'components';
function Date(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  const dateState = props.watch().covid_sickness_date;

  return (
    <div>
      <p className='font-bold text-tiny mb-4'>
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
      </p>
      <div className='relative'>
        <input
          dataTestId='antibodyDate'
          {...props.register('covid_sickness_date', { required: true })}
          type='date'
          placeholder='დდ/თთ/წწ'
          min='2019-11-01'
          className='pl-4 bg-transparent border-[1px] border-charcoal h-12 w-128 px-5 mb-2'
        />
        {!dateState && (
          <p className='bg-gray w-36 p-2 text-charcoal absolute top-[0.25rem] left-1'>
            დდ/თთ/წწ
          </p>
        )}
      </div>
      {props.errors.covid_sickness_date && <ErrorMessage text={errorMessage} />}
    </div>
  );
}

export default Date;

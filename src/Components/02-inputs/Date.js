import ErrorMessage from '../ErrosMessage';
function Date(props) {
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <div>
      <p className='font-bold text-tiny mb-4'>
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
      </p>
      <input
        {...props.register('date', { required: true })}
        type='date'
        placeholder='დდ/თთ/წწ'
        max='2022-05-01'
        min='2019-11-01'
        className='pl-4 bg-transparent border-[1px] border-charcoal h-12 w-128 px-5 mb-2'
      />
      {props.errors.date && <ErrorMessage text={errorMessage} />}
    </div>
  );
}

export default Date;

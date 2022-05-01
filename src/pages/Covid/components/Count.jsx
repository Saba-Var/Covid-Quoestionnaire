import { ErrorMessage } from 'components';
function Count(props) {
  const dateState = props.watch('antibodies.test_date');
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';

  return (
    <div>
      <p className='font-bold text-tiny mb-4'>
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა
      </p>
      <div className='flex flex-col gap-6 '>
        <div className='relative'>
          <input
            {...props.register('antibodies.test_date', { required: true })}
            type='date'
            placeholder='დდ/თთ/წწ'
            max='2022-05-01'
            min='2019-11-01'
            className='pl-4 bg-transparent border-[1px] border-charcoal h-12 w-128 px-5'
          />
          {!dateState && (
            <p className='bg-gray w-36 p-2 text-charcoal absolute top-[0.25rem] left-1'>
              დდ/თთ/წწ
            </p>
          )}
        </div>
        <input
          {...props.register('antibodies.number', { required: true })}
          type='number'
          placeholder='ანტისხეულების რაოდენობა'
          min={0}
          className='pl-4 bg-transparent border-[1px] border-charcoal h-12 w-128 px-5'
        />
      </div>
      {props.errors.antibodies && <ErrorMessage text={errorMessage} />}
    </div>
  );
}

export default Count;

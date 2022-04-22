import HighTemperature from '../../Assets/images/highTemperature.png';
import Antibodies from '../../Components/02-inputs/Antibodies';
import HadCovid from '../../Components/02-inputs/HadCovid';
import Count from '../../Components/02-inputs/Count';
import Date from '../../Components/02-inputs/Date';
import { useForm } from 'react-hook-form';
import Header from '../../Layouts/Header';
import Card from '../../UI/Card';

function Covid(props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,

    formState: { errors, isValid },
  } = useForm();
  // const data = watch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(isValid);
  };
  const inputState = watch();
  console.log(inputState);
  return (
    <Card>
      <Header page='2' />
      <form
        className='flex flex-col gap-14 w-168'
        onSubmit={handleSubmit(onSubmit)}
      >
        <HadCovid register={register} setValue={setValue} />
        {inputState.HadCovid === 'YES' && (
          <Antibodies register={register} setValue={setValue} />
        )}
        {inputState.antibodies === 'NO' && <Date register={register} />}
        {inputState.antibodies === 'YES' && <Count register={register} />}
        <button className='p-9 bg-orange-500'>Next page</button>
      </form>
      <div className='absolute right-40 top-28'>
        {/* <img src={HighTemperature} alt='sick boy' className='pt-20' /> */}
        <div className='bg-red-500 h-56 w-56 rounded-full absolute top-86 left-24 mix-blend-multiply'></div>
      </div>
    </Card>
  );
}

export default Covid;

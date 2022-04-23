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
    unregister,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      HadCovid: '',
      count: '',
      antibodies: '',
      date: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
  };
  const inputState = watch();

  return (
    <Card>
      <Header page='2' />
      <form
        className='flex flex-col gap-14 w-168'
        onSubmit={handleSubmit(onSubmit)}
      >
        <HadCovid
          errors={errors}
          register={register}
          setValue={setValue}
          unregister={unregister}
        />
        {inputState.HadCovid === 'YES' && (
          <Antibodies
            errors={errors}
            register={register}
            setValue={setValue}
            unregister={unregister}
          />
        )}
        {inputState.antibodies === 'NO' && (
          <Date register={register} errors={errors} />
        )}
        {inputState.antibodies === 'YES' && <Count register={register} />}
      </form>
      <div className='absolute right-40 top-28'>
        <img src={HighTemperature} alt='sick boy' className='pt-20' />
        <div className='bg-red-500 h-56 w-56 rounded-full absolute top-86 left-24 mix-blend-multiply'></div>
      </div>
    </Card>
  );
}

export default Covid;

import HighTemperature from '../../Assets/images/highTemperature.png';
import NavigationArrors from '../../Components/NavigationArrors';
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
    unregister,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
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
        <HadCovid errors={errors} register={register} unregister={unregister} />
        {inputState.HadCovid === 'კი' && (
          <Antibodies
            errors={errors}
            register={register}
            unregister={unregister}
          />
        )}
        {inputState.antibodies === 'არა' && (
          <Date register={register} errors={errors} />
        )}
        {inputState.antibodies === 'კი' && <Count register={register} />}
        <NavigationArrors
          back='/Identification'
          next='/Vaccinated'
          isValid={isValid}
          top={'pt-12'}
        />
      </form>
      <div className='absolute right-40 top-28 '>
        <img src={HighTemperature} alt='sick boy' className='pt-8' />
        <div className='bg-red-500 h-56 w-56 rounded-full absolute top-72 left-24 mix-blend-multiply hover:animate-flip-scale-up-hor'></div>
      </div>
    </Card>
  );
}

export default Covid;

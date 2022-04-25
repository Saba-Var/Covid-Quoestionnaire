import HighTemperature from '../../Assets/images/highTemperature.png';
import NavigationArrors from '../../Components/NavigationArrors';
import Antibodies from '../../Components/02-inputs/Antibodies';
import HadCovid from '../../Components/02-inputs/HadCovid';
import Count from '../../Components/02-inputs/Count';
import FormContext from '../../context/form-context';
import Date from '../../Components/02-inputs/Date';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../Layouts/Header';
import Card from '../../UI/Card';

function Covid(props) {
  const ctx = useContext(FormContext);
  useEffect(() => {
    setValue('HadCovid', ctx.state.covid.HadCovid);
    setValue('count', ctx.state.covid.count);
    setValue('antibody count', ctx.state.covid['antibody count']);
    setValue('date', ctx.state.covid.date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    setValue,
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

  useEffect(() => {
    const subscription = watch((data) => {
      ctx.dispatch({ type: 'covid', newState: data });
    });
    return () => subscription.unsubscribe();
  }, [ctx, watch]);

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <Header page='2' />
      <form
        className='flex flex-col gap-14 w-168'
        onSubmit={handleSubmit(onSubmit)}
      >
        <HadCovid errors={errors} register={register} unregister={unregister} />
        {ctx.state.covid.HadCovid === 'კი ' && (
          <Antibodies
            errors={errors}
            register={register}
            unregister={unregister}
          />
        )}
        {ctx.state.covid.antibodies === 'არა' && (
          <Date register={register} errors={errors} />
        )}
        {ctx.state.covid.antibodies === 'კი' && <Count register={register} />}
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

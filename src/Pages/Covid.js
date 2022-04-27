import NavigationArrors from '../Components/NavigationArrors';
import Antibodies from '../Components/02-inputs/Antibodies';
import HadCovid from '../Components/02-inputs/HadCovid';
import Count from '../Components/02-inputs/Count';
import FormContext from '../context/form-context';
import Date from '../Components/02-inputs/Date';
import Image02 from '../Components/Image02';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Layouts/Header';
import Card from '../UI/Card';

function Covid(props) {
  const ctx = useContext(FormContext).state.covid;
  const dispatch = useContext(FormContext).dispatch;
  useEffect(() => {
    setValue('HadCovid', ctx.HadCovid);
    setValue('count', ctx.count);
    setValue('antibody count', ctx['antibody count']);
    setValue('date', ctx.date);
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
      Antibodies: '',
      date: '',
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch({ type: 'covid', newState: data });
    });
    return () => subscription.unsubscribe();
  }, [ctx, dispatch, watch]);

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
        {ctx.HadCovid === 'კი ' && (
          <Antibodies
            errors={errors}
            register={register}
            unregister={unregister}
          />
        )}
        {ctx.Antibodies === 'არა' && (
          <Date register={register} errors={errors} watch={watch} />
        )}
        {ctx.Antibodies === 'კი' && <Count register={register} />}
        <NavigationArrors
          back='/Identification'
          next='/Vaccinated'
          isValid={isValid}
          top={'pt-12'}
        />
      </form>
      <Image02 />
    </Card>
  );
}

export default Covid;

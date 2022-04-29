import { Antibodies, Count, CovidImg, Date, HadCovid } from './components';
import { Header, Card, NavigationArrows } from 'components';
import { useContext, useEffect } from 'react';
import FormContext from 'state/form-context';
import { useForm } from 'react-hook-form';

function Covid(props) {
  const ctx = useContext(FormContext).state.covid;
  const dispatch = useContext(FormContext).dispatch;
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
    setValue('HadCovid', ctx.HadCovid);
    setValue('count', ctx.count);
    setValue('antibody count', ctx['antibody count']);
    setValue('date', ctx.date);
  }, [ctx, setValue]);

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
      <div className='flex justify-between'>
        <form
          className='flex flex-col gap-6 3xl:gap-14 w-168 '
          onSubmit={handleSubmit(onSubmit)}
        >
          <HadCovid
            errors={errors}
            register={register}
            unregister={unregister}
          />
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
          <NavigationArrows
            back='/Identification'
            next='/Vaccinated'
            isValid={isValid}
            top={'top-[95%]'}
            left={'left-[50%] translate-x-[-50%]'}
          />
        </form>
        <CovidImg />
      </div>
    </Card>
  );
}

export default Covid;

import { NavigationArrows } from 'components';
import FormContext from 'state/form-context';
import { useForm } from 'react-hook-form';
import { Card, Header } from 'components';
import { useContext } from 'react';
import { useEffect } from 'react';
import {
  HadVaccinated,
  WhichStage,
  VaccinatedImg,
  Waiting,
} from 'pages/Vaccinated/components';
function Vaccinated() {
  const ctx = useContext(FormContext);
  const {
    setValue,
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      had_vaccine: '',
      vaccination_stage: '',
      i_am_waiting: '',
    },
  });

  useEffect(() => {
    setValue('had_vaccine', ctx.state.vaccinated.had_vaccine);
    setValue('vaccination_stage', ctx.state.vaccinated.vaccination_stage);
    setValue('i_am_waiting', ctx.state.vaccinated.i_am_waiting);
  }, [
    ctx.state.vaccinated.had_vaccine,
    ctx.state.vaccinated.vaccination_stage,
    ctx.state.vaccinated.i_am_waiting,
    setValue,
  ]);

  useEffect(() => {
    const subscription = watch((data) => {
      ctx.dispatch({ type: 'vaccinated', newState: data });
    });
    return () => subscription.unsubscribe();
  }, [ctx, watch]);

  const onSubmit = (data, e) => {
    e.preventDefault();
  };
  const formState = watch();
  const hookForm = {
    register,
    errors,
  };

  return (
    <Card>
      <Header page='3' />
      <div className='flex justify-between'>
        <form
          className='flex flex-col gap-14 w-168'
          onSubmit={handleSubmit(onSubmit)}
        >
          <HadVaccinated hookForm={hookForm} unregister={unregister} />
          {formState.had_vaccine === 'yes' && (
            <WhichStage formState={formState} hookForm={hookForm} />
          )}
          {formState.had_vaccine === 'no' && (
            <Waiting formState={formState} hookForm={hookForm} />
          )}
          <NavigationArrows
            back='/Covid'
            next='/Covid-Policy'
            isValid={isValid}
            top={'top-[92%]'}
            left={'left-[50%] translate-x-[-50%]'}
          />
        </form>
        <VaccinatedImg />
      </div>
    </Card>
  );
}

export default Vaccinated;

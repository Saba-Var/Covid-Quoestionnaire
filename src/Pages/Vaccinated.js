import HadVaccinated from 'Components/VaccinatedInputs/HadVaccinated';
import NavigationArrors from 'Components/NavigationArrors';
import WhichStage from 'Components/VaccinatedInputs/WhichStage';
import Waiting from 'Components/VaccinatedInputs/Waiting';
import FormContext from 'context/form-context';
import { useForm } from 'react-hook-form';
import VaccinatedImg from 'Components/VaccinatedImg';
import Header from 'Layouts/Header';
import { useContext } from 'react';
import { useEffect } from 'react';
import Card from 'UI/Card';

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
      HadVaccinated: '',
      stage: '',
      waiting: '',
    },
  });

  useEffect(() => {
    setValue('HadVaccinated', ctx.state.vaccinated.HadVaccinated);
    setValue('stage', ctx.state.vaccinated.stage);
    setValue('waiting', ctx.state.vaccinated.waiting);
  }, [
    ctx.state.vaccinated.HadVaccinated,
    ctx.state.vaccinated.stage,
    ctx.state.vaccinated.waiting,
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
      <form
        className='flex flex-col gap-14 w-168'
        onSubmit={handleSubmit(onSubmit)}
      >
        <HadVaccinated hookForm={hookForm} unregister={unregister} />
        {formState.HadVaccinated === 'კი' && (
          <WhichStage formState={formState} hookForm={hookForm} />
        )}
        {formState.HadVaccinated === 'არა' && (
          <Waiting formState={formState} hookForm={hookForm} />
        )}
        <NavigationArrors
          back='/Covid'
          next='/Covid-Policy'
          isValid={isValid}
        />
      </form>
      <VaccinatedImg />
    </Card>
  );
}

export default Vaccinated;

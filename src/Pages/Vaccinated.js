import HadVaccinated from 'Components/VaccinatedInputs/HadVaccinated';
import NavigationArrors from 'Components/NavigationArrors';
import WhichStage from 'Components/VaccinatedInputs/WhichStage';
import Waiting from 'Components/VaccinatedInputs/Waiting';
import FormContext from 'context/form-context';
import { useForm } from 'react-hook-form';
import Image03 from 'Components/Image03';
import Header from 'Layouts/Header';
import { useContext } from 'react';
import { useEffect } from 'react';
import Card from 'UI/Card';

function Vaccinated() {
  const ctx = useContext(FormContext);
  useEffect(() => {
    setValue('HadVaccinated', ctx.state.vaccinated.HadVaccinated);
    setValue('stage', ctx.state.vaccinated.stage);
    setValue('waiting', ctx.state.vaccinated.waiting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      <Image03 />
    </Card>
  );
}

export default Vaccinated;
